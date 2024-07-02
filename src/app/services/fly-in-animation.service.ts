import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

/**
 * Service to apply fly-in animations to HTML elements when they enter the viewport.
 */
export class FlyInAnimationService {
  private flyInElements: HTMLElement[] = [];
  private observer: IntersectionObserver | undefined;
  private randomFlyInClasses = ['fly-in-left', 'fly-in-right', 'fly-in-top', 'fly-in-bottom'];

  flyInElementsChanged = new Subject<HTMLElement[]>();

  constructor()
  {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const randomClass = this.getRandomFlyInClass();
          entry.target.classList.add('fly-in', randomClass);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  }

  /**
   * Begin observing the provided elements for fly-in animations.
   *
   * @param elements
   */
  observeElements(elements: HTMLElement[]): void
  {
    this.flyInElements = elements;
    this.flyInElementsChanged.next(this.flyInElements);

    this.flyInElements.forEach(element => {
      this.observer?.observe(element);
    });
  }

  /**
   * Returns a randomly selected fly-in animation class from the predefined options.
   *
   * @returns {string} The randomly selected fly-in animation class.
   */
  private getRandomFlyInClass(): string
  {
    const randomIndex = Math.floor(Math.random() * this.randomFlyInClasses.length);
    return this.randomFlyInClasses[randomIndex];
  }
}
