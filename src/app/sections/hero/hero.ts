import { Component } from '@angular/core';
import { TextSwitchComponent } from '../../shared/text-switch/text-switch';
import { BrandIcons } from '../../shared/brand-icons/brand-icons';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-hero',
  imports: [TextSwitchComponent, BrandIcons],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  animations: [
    trigger('fadeSlideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-60px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ],
})
export class Hero {

}
