import { Component } from '@angular/core';
import { Tech } from '../../shared/tech/tech';
import { ProfileTabsComponent } from '../../shared/profile-tabs/profile-tabs';


@Component({
  selector: 'app-about',
  imports: [Tech, ProfileTabsComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
