import { Component } from '@angular/core';
import { Tech } from '../../shared/tech/tech';
import { ScrollSectionDirective } from "../../directive/scroll-section";

@Component({
  selector: 'app-skills',
  imports: [Tech, ScrollSectionDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  marqueeOn = true;
}
