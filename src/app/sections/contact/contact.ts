import { Component } from '@angular/core';
import { ScrollSectionDirective } from '../../directive/scroll-section';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollSectionDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
