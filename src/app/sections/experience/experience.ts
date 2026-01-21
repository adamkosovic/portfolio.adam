import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../model/experience.model';
import { ExperienceCardComponent } from '../../shared/experience-card/experience-card.component';
import { ScrollSectionDirective } from '../../directive/scroll-section';
import { NextsecBtn } from '../../shared/nextsec-btn/nextsec-btn';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent, ScrollSectionDirective, NextsecBtn],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  experince: Experience[] = [
    {
      role: 'Study to Frontend Developer',
      duration: '',
      company: 'EC Utbildning',
      location: 'Växjö, SE (remote)',
      technologies: ['Frontend', 'Backend', 'UX/UI'],
      period: '2024 - 2026',
      description: 'Studying to become a proficient Frontend Developer with a focus on modern web technologies and user experience design.',
      logoUrl: 'assets/icons/student.svg',
    },
    {
      role: 'Fullstack Developer',
      duration: '',
      company: 'Red River Consulting & Software',
      location: 'Stockholm, SE',
      technologies: ['Angular', 'C#'],
      period: 'Aug 2025',
      description: 'Worked on developing and maintaining web applications, collaborating with cross-functional teams to deliver high-quality software solutions.',
      logoUrl: 'assets/icons/code.svg',
    },
    {
      role: 'Frontend Developer',
      duration: 'Mars 2025',
      company: 'Lämneå Bruk',
      location: 'Ljusfallshammar, SE',
      technologies: ['JavaScript', 'Angular', 'CSS'],
      period: 'Mars 2025',
      description: 'Improving internal systems by modernizing UI components and optimizing data visualization features.',
      logoUrl: 'assets/icons/desktop.svg',
    },
    {
      role: 'Scrimba Certification - JavaScript',
      duration: '2024',
      company: 'Scrimba',
      location: '',
      technologies: ['JavaScript'],
      period: '2024',
      description: 'Learned advanced JavaScript concepts and best practices through hands-on projects.',
      logoUrl: 'assets/icons/certificate.svg',
    },
    {
    role: 'Coursera Certification - Introduction to Front-end Development',
      duration: '2024',
      company: 'Coursera',
      location: '',
      technologies: ['Html', 'CSS','JavaScript'],
      period: '2024',
      description: 'Gained foundational knowledge in front-end development, including responsive design and web accessibility.',
      logoUrl: 'assets/icons/certificate.svg',
    },
  ];

  trackByIndex = (i: number) => i;
}
