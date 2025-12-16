import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-text-switch',
  imports: [],
  templateUrl: './text-switch.html',
  styleUrl: './text-switch.css',
})
export class TextSwitchComponent implements OnInit, OnDestroy {
  @Input() texts: string[] = [];
  @Input() interval = 1600; 

  current = '';
  index = 0;
  visible = true;
  private timer?: number;

  ngOnInit() {
    if(!this.texts.length) return;

    this.current = this.texts[0];

    this.timer = window.setInterval(() => {
      this.visible = false;

      setTimeout(() => {
        this.index = (this.index + 1) % this.texts.length;
        this.current = this.texts[this.index];
        this.visible = true;
      }, 250); 
    }, this.interval);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
