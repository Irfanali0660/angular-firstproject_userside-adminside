import { TestBed } from '@angular/core/testing';

import { DatabaseApiServiceService } from './database-api-service.service';

describe('DatabaseApiServiceService', () => {
  let service: DatabaseApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
