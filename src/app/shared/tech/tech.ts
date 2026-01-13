import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

export type TechTag = string;

type TechItem = {
  name: string;
  icon: string;
};

const TECH_MAP: Record<TechTag, TechItem> = {
  JavaScript: { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  TypeScript: { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  Angular: { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
  Git: { name: 'Git', icon: 'devicon-git-plain colored' },
  CSS3: { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  Sass: { name: 'Sass', icon: 'devicon-sass-original colored' },
  React: { name: 'React', icon: 'devicon-react-original colored' },
  HTML5: { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  Bootstrap: { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  NetCore: { name: '.Net Core', icon: 'devicon-dotnetcore-plain colored' },
  Nodejs: { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  Docker: { name: 'Docker', icon: 'devicon-docker-plain colored' },
  PostgreSQL: { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  Npm: { name: 'Npm', icon: 'devicon-npm-plain colored' },
  Csharp: { name: 'C sharp' , icon: 'devicon-csharp-plain colored' },
  Postman: { name: 'Postman' , icon: 'devicon-postman-plain colored' },
  SqlDatabase: { name: 'Sql Database' , icon: 'devicon-azuresqldatabase-plain colored' },
  Figma: { name: 'Figma' , icon: 'devicon-figma-plain colored' },
};

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [ CommonModule, NgFor ],
  templateUrl: './tech.html',
  styleUrl: './tech.css',
})
export class Tech {
  @Input() tags: TechTag[] | null = null;
  @Input () size: 'sm' | 'md' = 'md';
  @Input() marquee = true;

  get tech(): TechItem[] {
    if (!this.tags || this.tags.length === 0) {
      return Object.values(TECH_MAP);
    }
    return this.tags.map(t => TECH_MAP[t]).filter(Boolean);
  }
}
