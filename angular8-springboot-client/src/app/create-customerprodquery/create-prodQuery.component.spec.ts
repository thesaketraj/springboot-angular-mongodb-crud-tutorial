import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProdQueryComponent } from './create-prodQuery.component';

describe('CreateProdQueryComponent', () => {
  let component: CreateProdQueryComponent;
  let fixture: ComponentFixture<CreateProdQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProdQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProdQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
