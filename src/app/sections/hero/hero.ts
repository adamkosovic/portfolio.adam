import { Component, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { TextSwitchComponent } from '../../shared/text-switch/text-switch';
import { BrandIcons } from '../../shared/brand-icons/brand-icons';


@Component({
  selector: 'app-hero',
  imports: [TextSwitchComponent, BrandIcons],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero{
}
