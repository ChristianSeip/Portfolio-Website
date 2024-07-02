import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {FlyInAnimationService} from "../../../services/fly-in-animation.service";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private FlyInAnimationService: FlyInAnimationService) {}

  ngAfterViewInit(): void
  {
    const elements = this.elementRef.nativeElement.querySelectorAll('.fly-in');
    this.FlyInAnimationService.observeElements(elements);
  }
}
