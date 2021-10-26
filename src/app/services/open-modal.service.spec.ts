import { TestBed } from '@angular/core/testing';

import { OpenModalService } from './open-modal.service';

describe('OpenModalService', () => {
  let service: OpenModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
