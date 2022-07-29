import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickChoiceComponent } from './pick-choice.component';

describe('PickChoiceComponent', () => {
  let component: PickChoiceComponent;
  let fixture: ComponentFixture<PickChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
