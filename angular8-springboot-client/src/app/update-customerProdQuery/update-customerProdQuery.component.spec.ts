import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerProdQueryComponent } from './update-customerProdQuery.component';

describe('UpdateEmployeeComponent', () => {
  let component: UpdateCustomerProdQueryComponent;
  let fixture: ComponentFixture<UpdateCustomerProdQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCustomerProdQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomerProdQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
