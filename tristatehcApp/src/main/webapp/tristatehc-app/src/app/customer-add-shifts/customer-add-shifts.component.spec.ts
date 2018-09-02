import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddShiftsComponent } from './customer-add-shifts.component';

describe('CustomerAddShiftsComponent', () => {
  let component: CustomerAddShiftsComponent;
  let fixture: ComponentFixture<CustomerAddShiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddShiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
