import { TestBed } from '@angular/core/testing';

import { FlyInAnimationService } from './fly-in-animation.service';

describe('FlyInAnimationService', () => {
  let service: FlyInAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlyInAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
