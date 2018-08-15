import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAvailabilityComponent } from './enter-availability.component';

describe('EnterAvailabilityComponent', () => {
  let component: EnterAvailabilityComponent;
  let fixture: ComponentFixture<EnterAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
