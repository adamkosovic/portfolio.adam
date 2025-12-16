import { Component } from '@angular/core';
import { TextSwitchComponent } from '../../shared/text-switch/text-switch';


@Component({
  selector: 'app-hero',
  imports: [TextSwitchComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
