import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {FlyInAnimationService} from "../../../services/fly-in-animation.service";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private FlyInAnimationService: FlyInAnimationService) {}

  ngAfterViewInit(): void
  {
    const elements = this.elementRef.nativeElement.querySelectorAll('.fly-in');
    this.FlyInAnimationService.observeElements(elements);
  }
}