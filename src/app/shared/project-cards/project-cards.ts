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
}
