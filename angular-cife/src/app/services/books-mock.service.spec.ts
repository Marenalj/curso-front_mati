import { TestBed } from '@angular/core/testing';

import { BooksMockService } from './books-mock.service';

describe('BooksMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksMockService = TestBed.get(BooksMockService);
    expect(service).toBeTruthy();
  });
});
