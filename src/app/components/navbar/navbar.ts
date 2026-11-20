import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  menuOpen = false;

  links = [
    { label: 'About', route: '/about' },
    { label: 'Projects', route: '/projects' },
    { label: 'Publications', route: '/publications' },
    { label: 'Skills', route: '/skills' },
    { label: 'Consulting', route: '/consulting' },
  ];

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
}
