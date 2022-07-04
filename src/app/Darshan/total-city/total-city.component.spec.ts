import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCityComponent } from './total-city.component';

describe('TotalCityComponent', () => {
  let component: TotalCityComponent;
  let fixture: ComponentFixture<TotalCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
