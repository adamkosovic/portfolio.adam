import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardsComponent } from '../../shared/project-cards/project-cards';
import { Project } from '../../model/project.model';
import { ScrollSectionDirective } from '../../directive/scroll-section';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardsComponent, ScrollSectionDirective],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-commerce - Fullstack',
      description: 'A full-stack e-commerce application with shopping cart, favorites, and admin product management.',
      imageUrl: 'assets/images/bookquote.png',
      imageAlt: 'Screenshot of Expert Notes app',
      tags: ['Angular', 'TypeScript', 'NetCore','Csharp', 'PostgreSQL'],
      repoUrl: 'https://github.com/...',
      liveUrl: 'https://...',
    },
    {
      title: 'BookQuote - Fullstack',
      description: 'A full-stack web application for managing books and quotes, built with Angular frontend and .NET backend.',
      imageUrl: 'assets/images/bookquote.png',
      imageAlt: 'Screenshot of Expert Notes app',
      tags: ['Angular', 'TypeScript', 'Bootstrap', 'NetCore','Csharp', 'PostgreSQL'],
      repoUrl: 'https://github.com/...',
      liveUrl: 'https://...',
    },
    {
      title: 'Music - Landingpage',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore',
      imageUrl: 'assets/images/bookquote.png',
      imageAlt: 'Screenshot of Expert Notes app',
      tags: ['TypeScript', 'Vite.js'],
      repoUrl: 'https://github.com/...',
      liveUrl: 'https://...',
    },
  ];
}
