import { TestBed } from '@angular/core/testing';

import { WorkshopActivityService } from './workshop-activity.service';

describe('WorkshopActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkshopActivityService = TestBed.get(WorkshopActivityService);
    expect(service).toBeTruthy();
  });
});
