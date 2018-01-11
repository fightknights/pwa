import { TestBed, inject } from '@angular/core/testing';

import { PushDataService } from './push-data.service';

describe('PushDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushDataService]
    });
  });

  it('should be created', inject([PushDataService], (service: PushDataService) => {
    expect(service).toBeTruthy();
  }));
});
