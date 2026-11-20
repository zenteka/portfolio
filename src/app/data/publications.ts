export interface Publication {
  authors: string;
  title: string;
  journal: string;
  year?: number;
  doi?: string;
  status: 'published' | 'in-preparation';
  contribution?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    authors: 'Piera K, et al.',
    title: 'HiCVerse: a FastAPI-powered portal for interactive and programmatic querying of harmonized Hi-C data across a purpose-built database.',
    journal: 'Manuscript in preparation.',
    status: 'in-preparation',
  },
  {
    authors: 'Franceschini G, Piera K, et al.',
    title: 'Large-scale systematic analysis of chromatin sub-compartments across biological contexts.',
    journal: 'Manuscript in preparation.',
    status: 'in-preparation',
    contribution: 'Co-first author (equal contribution)',
  },
  {
    authors: 'Georgakopoulou K et al. (incl. Piera K)',
    title: 'Chromatin heterogeneity and evolution in WGD.',
    journal: 'Manuscript in preparation.',
    status: 'in-preparation',
  },
  {
    authors: 'Cabanillas C et al. (incl. Piera K)',
    title: 'Delayed epigenetic adaptation stabilises endocrine therapy-induced dormancy in ER+ breast cancer.',
    journal: 'Manuscript in preparation.',
    status: 'in-preparation',
  },
  {
    authors: 'Luneau et al. (incl. Piera K)',
    title: 'Dynamics of phenotypic heterogeneity in a spatially structured bacterial population under overlapping nutrient and toxin gradients.',
    journal: 'Manuscript in preparation.',
    status: 'in-preparation',
    contribution: 'Microfluidics flow cell chip design',
  },
  {
    authors: 'Dionisi S, Piera K, Baumschlager A, Khammash M.',
    title: 'Implementation of a novel optogenetic tool in mammalian cells based on a split T7 RNA polymerase.',
    journal: 'ACS Synthetic Biology',
    year: 2022,
    doi: '10.1021/acssynbio.2c00067',
    status: 'published',
  },
  {
    authors: 'Negwer M, Piera K, Hesen R, Lütje L, Aarts L, Schubert D, Nadif Kasri N.',
    title: 'Ehmt1 regulates parvalbumin-positive interneuron development and GABAergic input in sensory cortical areas.',
    journal: 'Brain Structure and Function',
    year: 2020,
    doi: '10.1007/s00429-020-02149-9',
    status: 'published',
  },
];
