import { TestBed } from '@angular/core/testing';

import { ApiInterceptorServiceService } from './api-interceptor.service.service';

describe('ApiInterceptorServiceService', () => {
  let service: ApiInterceptorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInterceptorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
