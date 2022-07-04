import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventValunteersListComponent } from './event-valunteers-list.component';

describe('EventValunteersListComponent', () => {
  let component: EventValunteersListComponent;
  let fixture: ComponentFixture<EventValunteersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventValunteersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventValunteersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
