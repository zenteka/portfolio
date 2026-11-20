#!/usr/bin/env bash
# Deploy a static site build to a remote web host with rsync.
# Reusable across websites: everything site-specific comes from options,
# environment variables, or a gitignored .deploy.env file next to this script.
#
# Usage: ./deploy.sh [-d build_dir] [-H host] [-u user] [-w website] [-n]
#   -d  local build directory      (env DEPLOY_DIR,  default: dist/<project>/browser/)
#   -H  remote host                (env DEPLOY_HOST)
#   -u  remote user                (env DEPLOY_USER)
#   -w  site folder under ~/sites/ (env DEPLOY_SITE, e.g. karolpiera.com)
#   -n  dry run: show what would change, transfer nothing
#   -h  show this help
#
# Example .deploy.env (do not commit):
#   DEPLOY_HOST=example.ftp.host.com
#   DEPLOY_USER=myuser
#   DEPLOY_SITE=karolpiera.com

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Defaults from .deploy.env, if present (command-line options override them).
if [[ -f "$SCRIPT_DIR/.deploy.env" ]]; then
    # shellcheck disable=SC1091
    source "$SCRIPT_DIR/.deploy.env"
fi

PROJECT_NAME="$(basename "$SCRIPT_DIR")"
DEPLOY_DIR="${DEPLOY_DIR:-$SCRIPT_DIR/dist/$PROJECT_NAME/browser/}"
DEPLOY_HOST="${DEPLOY_HOST:-}"
DEPLOY_USER="${DEPLOY_USER:-}"
DEPLOY_SITE="${DEPLOY_SITE:-}"
DRY_RUN=()

usage() { sed -n '2,13p' "$0" | sed 's/^# \{0,1\}//'; }

while getopts "d:H:u:w:nh" opt; do
    case "$opt" in
        d) DEPLOY_DIR="$OPTARG" ;;
        H) DEPLOY_HOST="$OPTARG" ;;
        u) DEPLOY_USER="$OPTARG" ;;
        w) DEPLOY_SITE="$OPTARG" ;;
        n) DRY_RUN=(--dry-run) ;;
        h) usage; exit 0 ;;
        *) usage >&2; exit 2 ;;
    esac
done

missing=()
[[ -z "$DEPLOY_HOST" ]] && missing+=("host (-H / DEPLOY_HOST)")
[[ -z "$DEPLOY_USER" ]] && missing+=("user (-u / DEPLOY_USER)")
[[ -z "$DEPLOY_SITE" ]] && missing+=("website (-w / DEPLOY_SITE)")
if (( ${#missing[@]} )); then
    echo "Missing: ${missing[*]}" >&2
    usage >&2
    exit 2
fi

if [[ ! -d "$DEPLOY_DIR" ]]; then
    echo "Build directory not found: $DEPLOY_DIR (run 'npm run build' first?)" >&2
    exit 1
fi

# Trailing slash: sync the directory's contents, not the directory itself.
DEPLOY_DIR="${DEPLOY_DIR%/}/"
TARGET="$DEPLOY_USER@$DEPLOY_HOST:~/sites/$DEPLOY_SITE/"

echo "Deploying $DEPLOY_DIR -> $TARGET ${DRY_RUN[*]:+(dry run)}"
if rsync -avz --delete "${DRY_RUN[@]}" "$DEPLOY_DIR" "$TARGET"; then
    echo "Deployment successful."
else
    echo "Deployment failed." >&2
    exit 1
fi
