import { Component } from '@angular/core';
import { TextSwitchComponent } from '../../shared/text-switch/text-switch';
import { BrandIcons } from '../../shared/brand-icons/brand-icons';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-hero',
  imports: [TextSwitchComponent, BrandIcons],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private raf = 0;

  tilt(e: PointerEvent, el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
  
    const maxTilt = 7;
  
    const ry = px * maxTilt;
    const rx = -py * maxTilt;
  
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
  
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      el.style.setProperty('--t', '0ms');
      el.style.setProperty('--rx', `${rx}deg`);
      el.style.setProperty('--ry', `${ry}deg`);
    });
  }
  
  resetTilt(el: HTMLElement) {
    cancelAnimationFrame(this.raf);
    el.style.setProperty('--t', '240ms');
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
  }
  
    
}
