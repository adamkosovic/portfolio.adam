import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenu } from '../../shared/burger-menu/burger-menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BurgerMenu, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
