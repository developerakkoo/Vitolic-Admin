import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringServicesListComponent } from './catering-services-list.component';

describe('CateringServicesListComponent', () => {
  let component: CateringServicesListComponent;
  let fixture: ComponentFixture<CateringServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateringServicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
