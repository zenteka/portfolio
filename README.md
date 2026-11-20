# karolpiera.com

Personal portfolio of **Karol Piera**, a scientist turned data and software engineer.
Live at **[karolpiera.com](https://karolpiera.com)**.

The site presents my projects (including [HiCverse](https://hicverse.unil.ch), a production data
platform for 3D genomics), publications, skills and consulting work, and serves an up-to-date CV.

## Stack

- **Angular 21** (standalone components, client-side routing), TypeScript, SCSS
- Content kept as typed data (`src/app/data/`), so pages update without touching templates
- Static build, deployed to a shared web host with `rsync`; Apache `.htaccess` rewrite for SPA routing
- CV is built from LaTeX in a separate repo and copied into `src/assets/cv/` by a build script

## Structure

```
src/app/
├── pages/        home · about · projects · publications · skills · consulting
├── components/   navbar · footer
└── data/         projects.ts · publications.ts · skills.ts   ← site content
src/assets/       cv/ · images/ · videos/
public/           favicon, .htaccess, standalone skill-stack page
```

## Run locally

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/karolpiera-portfolio/browser/
npm test           # unit tests (Vitest)
```

## Deploy

`deploy.sh` syncs the production build to the web host with `rsync`. The target host is read from
the environment (not stored in the repo).

## Editing content

Most changes don't need template work:
- **Projects** → `src/app/data/projects.ts`
- **Publications** → `src/app/data/publications.ts`
- **Skills** → `src/app/data/skills.ts`

## Licence

Code: MIT. Text, images, videos and the CV are © Karol Piera, all rights reserved.
