import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardsComponent } from '../../shared/project-cards/project-cards';
import { Project } from '../../model/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardsComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Expert Notes',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/images/bookquote.png',
      imageAlt: 'Screenshot of Expert Notes app',
      tags: ['TypeScript', 'Vite.js'],
      repoUrl: 'https://github.com/...',
      liveUrl: 'https://...',
    },
    {
      title: 'Expert Notes',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/images/bookquote.png',
      imageAlt: 'Screenshot of Expert Notes app',
      tags: ['TypeScript', 'Vite.js'],
      repoUrl: 'https://github.com/...',
      liveUrl: 'https://...',
    },
    {
      title: 'Expert Notes',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/images/bookquote.png',
      imageAlt: 'Screenshot of Expert Notes app',
      tags: ['TypeScript', 'Vite.js'],
      repoUrl: 'https://github.com/...',
      liveUrl: 'https://...',
    },
  ];
}
