import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverBoyComponent } from './deliver-boy.component';

describe('DeliverBoyComponent', () => {
  let component: DeliverBoyComponent;
  let fixture: ComponentFixture<DeliverBoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverBoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
