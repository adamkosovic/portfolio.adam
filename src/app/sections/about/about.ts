import { Component, ViewChild } from '@angular/core';
import { ProfileTabsComponent } from '../../shared/profile-tabs/profile-tabs';
import { ScrollSectionDirective } from '../../directive/scroll-section';
import { NextsecBtn } from '../../shared/nextsec-btn/nextsec-btn';


@Component({
  selector: 'app-about',
  imports: [ProfileTabsComponent, ScrollSectionDirective, NextsecBtn],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
