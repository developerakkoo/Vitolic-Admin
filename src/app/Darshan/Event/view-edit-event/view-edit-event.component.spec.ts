import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditEventComponent } from './view-edit-event.component';

describe('ViewEditEventComponent', () => {
  let component: ViewEditEventComponent;
  let fixture: ComponentFixture<ViewEditEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
