import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationUserComponent } from './donation-user.component';

describe('DonationUserComponent', () => {
  let component: DonationUserComponent;
  let fixture: ComponentFixture<DonationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
