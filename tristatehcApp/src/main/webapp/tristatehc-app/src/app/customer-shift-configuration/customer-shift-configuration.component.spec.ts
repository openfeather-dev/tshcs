import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerShiftConfigurationComponent } from './customer-shift-configuration.component';

describe('CustomerShiftConfigurationComponent', () => {
  let component: CustomerShiftConfigurationComponent;
  let fixture: ComponentFixture<CustomerShiftConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerShiftConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerShiftConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
