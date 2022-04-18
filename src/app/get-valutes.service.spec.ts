import { TestBed } from '@angular/core/testing';

import { GetValutesService } from './get-valutes.service';

describe('GetValutesService', () => {
  let service: GetValutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetValutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
