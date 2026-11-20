// Chip syntax: '*Name' = highlighted key skill, 'Name|note' = small note after the name.
export interface Sub {
  label: string;
  intro?: string;
  chips: string[];
}

export interface Project {
  when: string;
  title: string;
  text: string;
  chips: string[];
}

export interface Tab {
  id: 'software' | 'bioinfo' | 'dataeng' | 'datascience' | 'wetlab';
  name: string;
  icon: string;
  tagline: string;
  layout: 'subs' | 'columns' | 'projects';
  subs?: Sub[];
  projects?: Project[];
}

export const TABS: Tab[] = [
  {
    id: 'software',
    name: 'Software',
    icon: '💻',
    tagline: 'Software · full-stack',
    layout: 'subs',
    subs: [
      {
        label: 'Languages',
        chips: ['*Python', '*R', '*TypeScript', '*Bash', 'Lisp'],
      },
      {
        label: 'Web dev',
        chips: ['*Angular', '*D3.js', 'HTML', 'CSS / SCSS', 'reveal.js', 'HiGlass', 'REST API design'],
      },
      {
        label: 'DevOps',
        chips: ['*GitHub Actions (CI/CD)', '*Docker', 'Docker Compose', 'Traefik', 'nginx', 'pytest', 'Prometheus', 'Grafana', 'cAdvisor'],
      },
      {
        label: 'UNIX',
        chips: ['Ubuntu / AlmaLinux / RHEL / Arch', 'SSH & SSHFS', 'tmux', 'rsync', 'Cron scheduling', 'User & group administration', 'find / grep / sed / awk'],
      },
      {
        label: 'Dev environment',
        chips: ['Emacs', 'Git / Magit', 'VS Code'],
      },
      {
        label: 'Self-hosted infra',
        intro: 'Built and run a headless 24/7 GPU server for local AI, reachable anywhere.',
        chips: [
          '*Local LLM serving|Ollama, Open WebUI',
          '*NVIDIA / CUDA',
          'GPU inference|quantization, VRAM mgmt',
          '*WireGuard / Tailscale|mesh VPN',
          'systemd services',
          'netplan',
          'Bare-metal provisioning',
          'Syncthing',
        ],
      },
    ],
  },
  {
    id: 'dataeng',
    name: 'Data engineering',
    icon: '🗄️',
    tagline: 'Pipelines · storage · APIs',
    layout: 'subs',
    subs: [
      {
        label: 'Data lake & storage',
        intro: 'Columnar data lake on S3-compatible object storage, queried at pixel level.',
        chips: ['*Apache Parquet', '*AWS S3', '*S3-compatible object storage', '*Data lake', 'DuckDB', 'HDF5'],
      },
      {
        label: 'Pipelines & ETL',
        intro: 'Reproducible workflows from raw public data to a harmonized resource.',
        chips: ['*Nextflow|nf-core', '*ETL / ELT', '*Data harmonization', 'hg19→hg38 liftover', 'Celery', 'Redis', 'SLURM'],
      },
      {
        label: 'APIs & serving',
        intro: 'Interactive and programmatic access to the same data.',
        chips: ['*FastAPI', 'Pydantic', 'REST API design', 'Celery task queue', 'Traefik'],
      },
      {
        label: 'Data quality & governance',
        intro: 'Making heterogeneous public data trustworthy and reusable.',
        chips: ['QC', 'Provenance & lineage', 'Controlled vocabularies', 'Metadata curation', 'Schema validation'],
      },
      {
        label: 'Monitoring',
        intro: 'Running the platform in production and knowing when it breaks.',
        chips: ['Prometheus', 'Grafana', 'cAdvisor', 'Custom exporters & alerting', 'GitHub Actions (CI)'],
      },
      {
        label: 'LLM-assisted curation',
        intro: 'Schema-constrained metadata completion with a deterministic validation layer.',
        chips: ['*Anthropic API', 'Self-hosted LLMs|Ollama, on-prem', 'Schema-constrained prompting', 'Validation guardrails'],
      },
    ],
  },
  {
    id: 'datascience',
    name: 'Data science',
    icon: '📈',
    tagline: 'Wrangling · statistics · machine learning',
    layout: 'subs',
    subs: [
      {
        label: 'Data wrangling',
        intro: 'Python libraries for tabular and array data, from exploration to large columnar files.',
        chips: ['*SQL', '*pandas', '*polars', '*numpy', 'PyArrow', 'scipy'],
      },
      {
        label: 'ML toolkit',
        chips: ['*scikit-learn', 'XGBoost', 'statsmodels', 'pyGAM'],
      },
      {
        label: 'Algorithms',
        chips: ['*GLMs', '*GAMs', 'Logistic regression', 'Gradient boosting', 'PCA', 'Dimensionality reduction', 'Clustering', 'Regularization'],
      },
      {
        label: 'Evaluation',
        chips: ['Cross-validation', 'ROC / AUC', 'Feature engineering'],
      },
      {
        label: 'Applied',
        chips: ['3D-compartment reconstruction|from ATAC / ChIP-seq', 'Multimodal predictive modelling', 'Information theory|entropy'],
      },
    ],
  },
  {
    id: 'bioinfo',
    name: 'Bioinformatics',
    icon: '🧬',
    tagline: 'Tools · formats · data modalities',
    layout: 'columns',
    subs: [
      {
        label: 'Tools',
        chips: ['cooler', 'cooltools', 'hictk', 'scanpy', 'SnapATAC2', 'CALDER2', 'MACS3', 'samtools', 'bedtools', 'SLURM'],
      },
      {
        label: 'Formats',
        chips: ['cooler|.mcool', 'juicer|.hic', 'HDF5|.h5', 'AnnData|.h5ad', 'FASTQ', 'BAM / SAM', 'BED', 'bedGraph', 'bigWig', 'VCF'],
      },
      {
        label: 'Data modalities',
        chips: ['*Hi-C|3D genome', '*ATAC-seq', '*snATAC-seq', '*ChIP-seq', '*RNA-seq|bulk & single-cell'],
      },
    ],
  },
  {
    id: 'wetlab',
    name: 'Hardware & wet lab',
    icon: '🧫',
    tagline: 'Four projects, from mouse cortex to microfluidic chips',
    layout: 'projects',
    projects: [
      {
        when: 'MSc · Donders Institute',
        title: 'Neurodevelopmental biology',
        text: 'Studied how parvalbumin-positive interneurons develop in the cortex of a mouse model of Kleefstra syndrome, an intellectual disability caused by EHMT1 haploinsufficiency. I prepared and stained brain tissue, imaged cortical layers by fluorescence microscopy, and wrote ImageJ macros to quantify interneuron density automatically. Published in Brain Structure and Function (2020).',
        chips: ['*Animal models', 'Brain-tissue preparation', 'Immunostaining', '*Fluorescence microscopy', '*Image analysis|ImageJ / FIJI macros', 'PCR'],
      },
      {
        when: 'MSc Neuroscience · side project',
        title: 'Optogenetic stimulation platform for neurons on chip',
        text: 'Side project alongside my MSc: I designed and built a prototype platform that delivers light to multi-electrode arrays, so human iPSC-derived neurons can be stimulated optically while their activity is recorded on chip. The housing was 3D-printed and the light delivery driven by an Arduino. Unpublished.',
        chips: ['*Multi-electrode arrays (MEA)', '*hiPSC-derived neurons|iNeurons', 'Neural optogenetics', 'Neuronal cultures', '*Arduino', '*3D printing', 'LED circuits'],
      },
      {
        when: '2019 · ETH Zürich',
        title: 'Synthetic biology: optogenetic gene control',
        text: 'Optimised and implemented OptoT7, a light-controllable gene expression system for mammalian cells, at the Control Theory and Systems Biology group. I did the cloning, cell culture and readouts, and built a 3D-printed LED illumination rig for precise light stimulation of the cultures. Published in ACS Synthetic Biology (2022).',
        chips: ['*Molecular cloning', '*Mammalian cell culture', '*qPCR', '*Live-cell microscopy', 'Digital Micromirror Device (DMD)', 'LED illumination platform'],
      },
      {
        when: 'PhD, year 1 · UNIL',
        title: 'Microbial ecology in microfluidic chips',
        text: 'In the first year of my PhD I studied phenotypic heterogeneity in bacterial populations under overlapping nutrient and toxin gradients. I designed the microfluidic flow-cell chips in K-Layout for live imaging, and the designs went on to be used in ongoing lab research. Publication in preparation.',
        chips: ['*Microfluidics', '*K-Layout chip design', 'Flow-cell design', 'Bacterial live imaging'],
      },
    ],
  },
];

export const LANGUAGES: string[] = ['Polish|native', 'English|C2', 'German|B2', 'French|A1', 'Italian|A1'];
