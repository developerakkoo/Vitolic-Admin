import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMathlyComponent } from './add-mathly.component';

describe('AddMathlyComponent', () => {
  let component: AddMathlyComponent;
  let fixture: ComponentFixture<AddMathlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMathlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMathlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
