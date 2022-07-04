import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingRequestComponent } from './event-booking-request.component';

describe('EventBookingRequestComponent', () => {
  let component: EventBookingRequestComponent;
  let fixture: ComponentFixture<EventBookingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBookingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBookingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
