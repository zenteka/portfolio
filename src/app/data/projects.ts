export interface GalleryItem {
  src: string;
  caption: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: 'software' | 'hardware';
  link?: string;
  featured?: boolean;
  image?: string;
  videoSrc?: string;
  gallery?: GalleryItem[];
  colSpan?: number; // columns to span in a 6-col grid
}

export const PROJECTS: Project[] = [
  {
    title: 'HiCVerse Platform',
    description: 'Full-stack web platform integrating 1,000+ standardized human Hi-C contact maps with a unified query engine and interactive visualization. Built with Angular, FastAPI, Apache Parquet on AWS S3 (2TB+), and HiGlass. Deployed at hicverse.unil.ch via Docker Compose and Traefik.',
    tags: ['Angular', 'FastAPI', 'Apache Parquet', 'AWS S3', 'Docker', 'Traefik', 'HiGlass', 'Python'],
    category: 'software',
    link: 'https://hicverse.unil.ch',
    featured: true,
    image: 'assets/images/hicVerse.png',
  },
  {
    title: 'Hi-C Harmonization Pipeline',
    description: 'Nextflow DSL2 pipeline standardizing 1,000+ human Hi-C maps from ENCODE, 4DN, and NCBI to a common genome assembly (hg38), chromosome nomenclature, resolution set, and normalization scheme. Handles hg19→hg38 liftover, alternative contig removal, multi-resolution mcool generation, and ICE normalization.',
    tags: ['Nextflow', 'Python', 'hictk', 'cooler', 'HiCLift', 'SLURM', 'Bash'],
    category: 'software',
    link: 'https://github.com/zenteka/hicverse_pipeline',
    colSpan: 3,
  },
  {
    title: '3D Chromatin Compartment Analysis',
    description: 'Advanced analysis of chromatin compartmentalization across biological contexts: health, disease, and perturbation studies (in collaboration). Encompasses large-scale sub-compartment calling, clustering, entropy-based plasticity metrics, GSEA, and GAM-based modelling of chromatin rank and variability to assign conserved loci to core compartment states.',
    tags: ['Python', 'scikit-learn', 'scipy', 'CALDER2', 'snATAC-seq', 'SnapATAC2', 'pandas', 'R'],
    category: 'software',
    colSpan: 3,
  },
  {
    title: 'Microfluidic Chip Design',
    description: 'Designed flow cell chips in K-Layout for spatially structured bacterial population dynamics experiments. Chips enable controlled nutrient and toxin gradients for the study of phenotypic heterogeneity. Live cell imaging of bacteria growing inside the chip.',
    tags: ['K-Layout', 'Microfluidics', 'Live cell imaging', 'Epifluorescence microscopy'],
    category: 'hardware',
    videoSrc: 'assets/videos/bacteria_chip.mp4',
    colSpan: 2,
  },
  {
    title: 'Digital Micromirror Device (DMD)',
    description: 'Used a Digital Micromirror Device to direct a spatially patterned light beam with single-cell precision onto bacteria inside a microfluidic chip — enabling spatially resolved optogenetic stimulation of individual bacteria and real-time fluorescence readout.',
    tags: ['DMD', 'Optogenetics', 'Microfluidics', 'Epifluorescence microscopy', 'Live cell imaging'],
    category: 'hardware',
    gallery: [
      {
        src: 'assets/images/microfluidic_chip_web.jpg',
        caption: 'Microfluidic flow cell chip under DMD-patterned light stimulation',
      },
    ],
    colSpan: 2,
  },
  {
    title: 'Optogenetics — Light Plate Apparatus',
    description: 'Development of mammalian optogenetic systems at ETH Zürich D-BSSE. Implementation of OptoT7, a light-inducible split T7 RNA polymerase system for gene expression control in mammalian cells. Built and programmed an open-source Light Plate Apparatus (LPA) for precise, programmable LED stimulation of cell cultures.',
    tags: ['Optogenetics', 'Synthetic Biology', 'Arduino', 'LED circuits', 'Mammalian cell culture', 'Python'],
    category: 'hardware',
    gallery: [
      {
        src: 'assets/images/lpa_web.jpg',
        caption: 'Light Plate Apparatus (LPA) — open-source optogenetic platform for programmable LED stimulation',
      },
    ],
    colSpan: 2,
  },
];
