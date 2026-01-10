import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [ CommonModule, NgFor ],
  templateUrl: './tech.html',
  styleUrl: './tech.css',
})
export class Tech {
  tech = [
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Sass', icon: 'devicon-sass-original colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'Bootsrap', icon: 'devicon-bootstrap-plain colored' },
    { name: '.Net Core', icon: 'devicon-dotnetcore-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Npm', icon: 'devicon-npm-plain colored' },
    { name: 'C sharp' , icon: 'devicon-csharp-plain colored' },
    { name: 'Postman' , icon: 'devicon-postman-plain colored' },
    { name: 'Sql Database' , icon: 'devicon-azuresqldatabase-plain colored' },
    { name: 'Figma' , icon: 'devicon-figma-plain colored' },
  ]
}
