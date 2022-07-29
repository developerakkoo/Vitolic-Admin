import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSubscriptionComponent } from './month-subscription.component';

describe('MonthSubscriptionComponent', () => {
  let component: MonthSubscriptionComponent;
  let fixture: ComponentFixture<MonthSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
