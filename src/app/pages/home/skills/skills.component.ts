import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {FlyInAnimationService} from "../../../services/fly-in-animation.service";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private FlyInAnimationService: FlyInAnimationService) {}

  ngAfterViewInit(): void
  {
    const elements = this.elementRef.nativeElement.querySelectorAll('.fly-in');
    this.FlyInAnimationService.observeElements(elements);
  }
}
