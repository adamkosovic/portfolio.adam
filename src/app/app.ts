
import { Navbar } from './core/navbar/navbar';
import { About } from './sections/about/about';
import { ProjectsComponent } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { Hero } from './sections/hero/hero';
import { Footer } from './core/footer/footer';
import { Component } from '@angular/core';
import { ExperienceComponent } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';
import { ScrollSectionDirective } from './directive/scroll-section';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Navbar, Hero, About, ProjectsComponent, Contact, Footer, ExperienceComponent, Skills, ScrollSectionDirective],
  styleUrls: ['./app.css']
})
export class App {

}
