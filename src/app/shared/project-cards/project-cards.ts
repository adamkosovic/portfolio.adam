import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project} from '../../model/project.model';

@Component({
  selector: 'app-project-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-cards.html',
  styleUrl: './project-cards.css',
})
export class ProjectCardsComponent {
  @Input({ required: true }) project!: Project;
  @Input() reverse = false;

  tilt(e: MouseEvent, el: HTMLElement) {
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
  
    const maxTilt = 12; 
  
    const rotateY = px * maxTilt;     
    const rotateX = -py * maxTilt;   
  
    el.style.setProperty('--rx', `${rotateX}deg`);
    el.style.setProperty('--ry', `${rotateY}deg`);
  
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
  }
  
  resetTilt(el: HTMLElement) {
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
  }
}
