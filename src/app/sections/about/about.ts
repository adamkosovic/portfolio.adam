import { Component } from '@angular/core';
import { Tech } from '../../shared/tech/tech';
import { ProfileTabsComponent } from '../../shared/profile-tabs/profile-tabs';
import { ScrollSectionDirective } from '../../directive/scroll-section';


@Component({
  selector: 'app-about',
  imports: [Tech, ProfileTabsComponent, ScrollSectionDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
