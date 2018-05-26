import { TestBed, inject } from '@angular/core/testing';

import { CommonFacService } from './common-fac.service';

describe('CommonFacService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonFacService]
    });
  });

  it('should be created', inject([CommonFacService], (service: CommonFacService) => {
    expect(service).toBeTruthy();
  }));
});
