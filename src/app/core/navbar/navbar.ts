import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenu } from '../../shared/burger-menu/burger-menu';
import { ScrollSectionsService } from '../../service/scroll-sections';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BurgerMenu, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;

  constructor(public scroll: ScrollSectionsService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  goTo(id: string, event?: Event) {
    event?.preventDefault();
    this.scroll.scrollToId(id, 1000);
    this.closeMenu();
  }
}
