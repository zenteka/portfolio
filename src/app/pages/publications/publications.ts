import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PUBLICATIONS } from '../../data/publications';

@Component({
  selector: 'app-publications',
  imports: [CommonModule],
  templateUrl: './publications.html',
  styleUrl: './publications.scss',
})
export class PublicationsComponent {
  publications = PUBLICATIONS;
}
