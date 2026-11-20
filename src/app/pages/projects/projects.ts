import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  featured = PROJECTS.filter(p => p.featured);
  softwareRest = PROJECTS.filter(p => p.category === 'software' && !p.featured);
  hardware = PROJECTS.filter(p => p.category === 'hardware');
}
