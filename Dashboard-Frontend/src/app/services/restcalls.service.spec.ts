import { TestBed } from '@angular/core/testing';

import { RESTcallsService } from './restcalls.service';

describe('RESTcallsService', () => {
  let service: RESTcallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTcallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
