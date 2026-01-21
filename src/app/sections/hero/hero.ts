import { Component } from '@angular/core';
import { TextSwitchComponent } from '../../shared/text-switch/text-switch';
import { BrandIcons } from '../../shared/brand-icons/brand-icons';
import { ScrollSectionDirective } from '../../directive/scroll-section';
import { NextsecBtn } from '../../shared/nextsec-btn/nextsec-btn';


@Component({
  selector: 'app-hero',
  imports: [TextSwitchComponent, BrandIcons, ScrollSectionDirective, NextsecBtn],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero{

}
