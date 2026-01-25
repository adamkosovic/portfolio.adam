import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardsComponent } from '../../shared/project-cards/project-cards';
import { Project } from '../../model/project.model';
import { ScrollSectionDirective } from '../../directive/scroll-section';
import { NextsecBtn } from '../../shared/nextsec-btn/nextsec-btn';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardsComponent, ScrollSectionDirective, NextsecBtn],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-commerce - Fullstack',
      description: 'A full-stack e-commerce application with shopping cart, favorites, and admin product management.',
      imageUrl: 'assets/images/ecommerce.png',
      imageAlt: 'E-commerce app',
      tags: ['Angular','C#','PostgreSQL'],
      repoUrl: 'https://github.com/adamkosovic/E-commerce',
      liveUrl: 'https://codee-commerce.netlify.app/',
    },
    {
      title: 'BookQuote - Fullstack',
      description: 'A full-stack web application for managing books and quotes, built with Angular frontend and .NET backend.',
      imageUrl: 'assets/images/quotebook.png',
      imageAlt: 'Screenshot of Expert Notes app',
      tags: ['Angular', 'Bootstrap','C#', 'PostgreSQL'],
      repoUrl: 'https://github.com/adamkosovic/BookQuote',
      liveUrl: 'https://app-book-quote.netlify.app/',
    },
    {
      title: 'Music - Landingpage (desktop only)',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore',
      imageUrl: 'assets/images/spotifylandingpage.png',
      imageAlt: 'Screenshot of Expert Notes app',
      tags: ['TypeScript', 'Vite.js'],
      repoUrl: 'https://github.com/adamkosovic/Spotify-landingpage',
      liveUrl: '',
    },
  ];
}
