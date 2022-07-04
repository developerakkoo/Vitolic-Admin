import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDonationListComponent } from './event-donation-list.component';

describe('EventDonationListComponent', () => {
  let component: EventDonationListComponent;
  let fixture: ComponentFixture<EventDonationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDonationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDonationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
