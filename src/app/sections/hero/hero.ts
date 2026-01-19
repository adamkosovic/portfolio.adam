import { Component, ViewChild } from '@angular/core';
import { TextSwitchComponent } from '../../shared/text-switch/text-switch';
import { BrandIcons } from '../../shared/brand-icons/brand-icons';
import { ScrollSectionDirective } from '../../directive/scroll-section';


@Component({
  selector: 'app-hero',
  imports: [TextSwitchComponent, BrandIcons, ScrollSectionDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero{
  @ViewChild(ScrollSectionDirective)
  private section!: ScrollSectionDirective;

  next() {
    this.section.next();
  }
}
