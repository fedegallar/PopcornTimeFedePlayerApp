import { TestBed, inject } from '@angular/core/testing';

import { MoviesListServiceService } from './movies-list-service.service';

describe('MoviesListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesListServiceService]
    });
  });

  it('should be created', inject([MoviesListServiceService], (service: MoviesListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
