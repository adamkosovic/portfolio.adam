import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-text-switch',
  standalone: true,
  styleUrl: './text-switch.css',
  template: `<span #typedEl></span>`,
})
export class TextSwitchComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typedEl', { static: true }) typedEl!: ElementRef<HTMLElement>;
  private typed?: Typed;

  ngAfterViewInit() {
    this.typed = new Typed(this.typedEl.nativeElement, {
      strings: ['Frontend Developer', 'Web Developer', 'Angular Developer'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  ngOnDestroy() {
    this.typed?.destroy();
  }
}
