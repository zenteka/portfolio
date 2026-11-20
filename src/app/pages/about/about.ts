import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  experience = [
    {
      title: 'PhD Researcher — Data Engineering & Bioinformatics',
      org: 'University of Lausanne (UNIL) / CSO Lab',
      period: 'Oct 2021 – 2026',
      location: 'Lausanne, Switzerland',
    },
    {
      title: 'Scientific Assistant — Optogenetics & Synthetic Biology',
      org: 'ETH Zürich D-BSSE, Control Theory & Systems Biology',
      period: '2019 – 2021',
      location: 'Basel, Switzerland',
    },
    {
      title: 'Research Intern — Neuroscience',
      org: 'Donders Institute for Brain, Cognition and Behaviour',
      period: '2018 – 2019',
      location: 'Nijmegen, Netherlands',
    },
    {
      title: 'Tourist Guide (English)',
      org: 'Wieliczka Salt Mine',
      period: '2013 – 2016',
      location: 'Cracow, Poland',
    },
  ];

  education = [
    { degree: 'MSc — Cognitive Neuroscience', institution: 'Freie Universität Berlin', period: '2016 – 2019', location: 'Berlin, Germany' },
    { degree: 'BSc — Biology, Molecular Biology Track', institution: 'Jagiellonian University of Cracow', period: '2011 – 2014', location: 'Cracow, Poland' },
  ];

  languages = [
    { name: 'Polish', level: 'Native' },
    { name: 'English', level: 'C2' },
    { name: 'German', level: 'B2' },
    { name: 'French', level: 'A1' },
    { name: 'Italian', level: 'A1' },
  ];
}
