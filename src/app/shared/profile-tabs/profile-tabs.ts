import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

type Tab = 'about' | 'interests';

@Component({
  selector: 'app-profile-tabs',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './profile-tabs.html',
  styleUrls: ['./profile-tabs.css'],
})
export class ProfileTabsComponent {
  activeTab: Tab = 'about';

  setTab(tab: Tab) {
    this.activeTab = tab;
  }
}
