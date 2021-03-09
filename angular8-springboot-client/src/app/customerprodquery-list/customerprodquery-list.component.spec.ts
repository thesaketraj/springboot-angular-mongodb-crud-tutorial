import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProdQueryListComponent } from './customerprodquery-list.component';

describe('CustomerProdQueryListComponent', () => {
  let component: CustomerProdQueryListComponent;
  let fixture: ComponentFixture<CustomerProdQueryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProdQueryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProdQueryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
