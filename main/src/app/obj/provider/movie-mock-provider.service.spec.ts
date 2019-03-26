import { TestBed } from '@angular/core/testing';

import { MovieMockProviderService } from './movie-mock-provider.service';

describe('MovieMockProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieMockProviderService = TestBed.get(MovieMockProviderService);
    expect(service).toBeTruthy();
  });
});
