import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProdQueryDetailsComponent } from './customerprodquery-details.component';

describe('CustomerProdQueryDetailsComponent', () => {
  let component: CustomerProdQueryDetailsComponent;
  let fixture: ComponentFixture<CustomerProdQueryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProdQueryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProdQueryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
