import { TestBed } from '@angular/core/testing';

import { PlanetsListService } from './planets-list.service';

describe('PlanetsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetsListService = TestBed.get(PlanetsListService);
    expect(service).toBeTruthy();
  });
});
