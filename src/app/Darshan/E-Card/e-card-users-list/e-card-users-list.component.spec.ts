import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECardUsersListComponent } from './e-card-users-list.component';

describe('ECardUsersListComponent', () => {
  let component: ECardUsersListComponent;
  let fixture: ComponentFixture<ECardUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECardUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECardUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
