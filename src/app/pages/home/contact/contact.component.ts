import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {FlyInAnimationService} from "../../../services/fly-in-animation.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private FlyInAnimationService: FlyInAnimationService) {}

  ngAfterViewInit(): void
  {
    const elements = this.elementRef.nativeElement.querySelectorAll('.fly-in');
    this.FlyInAnimationService.observeElements(elements);
  }
}
