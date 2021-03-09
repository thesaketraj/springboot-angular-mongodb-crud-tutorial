import { TestBed } from '@angular/core/testing';

import { CustomerProdQueryService } from './customerProdQuery.service';

describe('CustomerProdQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerProdQueryService = TestBed.get(CustomerProdQueryService);
    expect(service).toBeTruthy();
  });
});
