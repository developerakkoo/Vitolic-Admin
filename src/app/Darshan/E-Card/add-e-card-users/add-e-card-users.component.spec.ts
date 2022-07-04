import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddECardUsersComponent } from './add-e-card-users.component';

describe('AddECardUsersComponent', () => {
  let component: AddECardUsersComponent;
  let fixture: ComponentFixture<AddECardUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddECardUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddECardUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
