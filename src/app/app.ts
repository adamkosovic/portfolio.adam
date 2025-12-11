
import { Navbar } from './core/navbar/navbar';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { Hero } from './sections/hero/hero';
import { Footer } from './core/footer/footer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Navbar, Hero, About, Projects, Contact, Footer],
  styleUrls: ['./app.css']
})
export class App {

}
