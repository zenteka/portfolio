import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProjectsComponent } from './pages/projects/projects';
import { PublicationsComponent } from './pages/publications/publications';
import { SkillsComponent } from './pages/skills/skills';
import { ConsultingComponent } from './pages/consulting/consulting';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: '**', redirectTo: '' },
];
