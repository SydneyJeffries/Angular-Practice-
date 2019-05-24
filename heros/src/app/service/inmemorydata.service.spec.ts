import { TestBed } from '@angular/core/testing';

import { InmemorydataService } from './inmemorydata.service';

describe('InmemorydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InmemorydataService = TestBed.get(InmemorydataService);
    expect(service).toBeTruthy();
  });
});
