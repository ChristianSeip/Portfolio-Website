import { Component } from '@angular/core';
import {ContactComponent} from "../home/contact/contact.component";
import {IntroComponent} from "../home/intro/intro.component";
import {ProjectsComponent} from "../home/projects/projects.component";
import {SidebarComponent} from "../../shared/sidebar/sidebar.component";
import {SkillsComponent} from "../home/skills/skills.component";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    ContactComponent,
    IntroComponent,
    ProjectsComponent,
    SidebarComponent,
    SkillsComponent
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.css'
})
export class LegalNoticeComponent {

}
