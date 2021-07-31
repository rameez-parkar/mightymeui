import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsAvailabilityComponent } from './seats-availability.component';

describe('SeatsAvailabilityComponent', () => {
  let component: SeatsAvailabilityComponent;
  let fixture: ComponentFixture<SeatsAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
