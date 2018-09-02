import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOptionsComponent } from './customer-options.component';

describe('CustomerOptionsComponent', () => {
  let component: CustomerOptionsComponent;
  let fixture: ComponentFixture<CustomerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
