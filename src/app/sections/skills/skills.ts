import { Component } from '@angular/core';
import { Tech } from '../../shared/tech/tech';
import { ScrollSectionDirective } from "../../directive/scroll-section";
import { NextsecBtn } from '../../shared/nextsec-btn/nextsec-btn';

@Component({
  selector: 'app-skills',
  imports: [Tech, ScrollSectionDirective, NextsecBtn],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  marqueeOn = true;
}
