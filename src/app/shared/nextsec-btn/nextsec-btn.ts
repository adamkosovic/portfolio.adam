import { Component, ViewChild } from '@angular/core';
import { ScrollSectionDirective } from '../../directive/scroll-section';

@Component({
  selector: 'app-nextsec-btn',
  imports: [ScrollSectionDirective],
  templateUrl: './nextsec-btn.html',
  styleUrl: './nextsec-btn.css',
})
export class NextsecBtn {
  @ViewChild(ScrollSectionDirective)
  private section!: ScrollSectionDirective;

  next() {
    this.section.next();
  }
}
