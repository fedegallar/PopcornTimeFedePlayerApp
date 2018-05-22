import { TestBed, inject } from '@angular/core/testing';

import { SubtitlesService } from './subtitles.service';

describe('SubtitlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubtitlesService]
    });
  });

  it('should be created', inject([SubtitlesService], (service: SubtitlesService) => {
    expect(service).toBeTruthy();
  }));
});
