import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacylistComponent } from './privacylist.component';

describe('PrivacylistComponent', () => {
  let component: PrivacylistComponent;
  let fixture: ComponentFixture<PrivacylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
