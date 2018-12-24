import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignShiftsComponent } from './assign-shifts.component';

describe('AssignShiftsComponent', () => {
  let component: AssignShiftsComponent;
  let fixture: ComponentFixture<AssignShiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignShiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
