import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Experience } from '../../model/experience.model';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css',
})
export class ExperienceCardComponent {
  @Input({ required: true })experience!: Experience;
  @Input() side: 'left' | 'right' = 'right';
}
