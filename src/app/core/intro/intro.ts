import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.html',
  styleUrls: ['./intro.css']
})
export class IntroComponent implements OnInit {
  @Output() finished = new EventEmitter<void>();

  ngOnInit(): void {
    setTimeout(() => {
      this.finished.emit();
    }, 2500);
  }
}
