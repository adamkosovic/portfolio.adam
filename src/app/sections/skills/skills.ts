import { Component } from '@angular/core';
import { Tech } from '../../shared/tech/tech';

@Component({
  selector: 'app-skills',
  imports: [Tech],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  marqueeOn = true;
}
