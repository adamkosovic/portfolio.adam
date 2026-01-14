import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../model/experience.model';
import { ExperienceCardComponent } from '../../shared/experience-card/experience-card.component';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  experince: Experience[] = [
    {
      role: 'Software Engineer',
      duration: 'Jan 2020 - Present',
      company: 'Tech Solutions Inc.',
      location: 'New York, NY',
      technologies: ['Angular', 'Node.js', 'TypeScript'],
      period: 'Jan 2020',
      description: 'Developing and maintaining web applications using Angular and Node.js',
      logoUrl: 'assets/logos/tech-solutions.png',
    },
    {
      role: 'Frontend Developer',
      duration: 'May 2018 - Dec 2019',
      company: 'Another Company',
      location: 'Stockholm, SE',
      technologies: ['Angular', 'RxJS', 'SCSS'],
      period: 'May 2018',
      description: 'Built UI components and improved performance across the product.',
      logoUrl: 'assets/logos/another-company.png',
    },
    {
      role: 'Frontend Developer',
      duration: 'May 2018 - Dec 2019',
      company: 'Another Company',
      location: 'Stockholm, SE',
      technologies: ['Angular', 'RxJS', 'SCSS'],
      period: 'May 2018',
      description: 'Built UI components and improved performance across the product.',
      logoUrl: 'assets/logos/another-company.png',
    },
    {
      role: 'Frontend Developer',
      duration: 'May 2018 - Dec 2019',
      company: 'Another Company',
      location: 'Stockholm, SE',
      technologies: ['Angular', 'RxJS', 'SCSS'],
      period: 'May 2018',
      description: 'Built UI components and improved performance across the product.',
      logoUrl: 'assets/logos/another-company.png',
    },
    {
    role: 'Frontend Developer',
      duration: 'May 2018 - Dec 2019',
      company: 'Another Company',
      location: 'Stockholm, SE',
      technologies: ['Angular', 'RxJS', 'SCSS'],
      period: 'May 2018',
      description: 'Built UI components and improved performance across the product.',
      logoUrl: 'assets/logos/another-company.png',
    },
  ];

  trackByIndex = (i: number) => i;
}
