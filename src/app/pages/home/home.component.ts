import { Component } from '@angular/core';
import {IntroComponent} from "./intro/intro.component";
import {SkillsComponent} from "./skills/skills.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {SidebarComponent} from "../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IntroComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    SidebarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
