import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigatorService } from './navigator.service';

describe('NavigatorService', () => {
  let service: NavigatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(NavigatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
