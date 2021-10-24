import { TestBed } from '@angular/core/testing';

import { SaveRegisterationGuard } from './save-registeration.guard';

describe('SaveRegisterationGuard', () => {
  let guard: SaveRegisterationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SaveRegisterationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
