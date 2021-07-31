import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSelectorComponent } from './time-selector.component';

describe('TimeSelectorComponent', () => {
  let component: TimeSelectorComponent;
  let fixture: ComponentFixture<TimeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a different time slot on clicking new time option', () => {
    component.onTimeOptionClick(4);
    expect(component.selectedTime).toEqual(4);
  });
});
