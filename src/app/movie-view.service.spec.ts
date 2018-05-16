import { TestBed, inject } from '@angular/core/testing';

import { MovieViewService } from './movie-view.service';

describe('MovieViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieViewService]
    });
  });

  it('should be created', inject([MovieViewService], (service: MovieViewService) => {
    expect(service).toBeTruthy();
  }));
});
