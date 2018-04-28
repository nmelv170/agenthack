import { TestBed, inject } from '@angular/core/testing';

import { SelectedServiceService } from './selected-service.service';

describe('SelectedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedServiceService]
    });
  });

  it('should be created', inject([SelectedServiceService], (service: SelectedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
