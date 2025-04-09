import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersctickettypedashboardWrapperComponent } from './promotersctickettypedashboard-wrapper.component';

describe('PromotersctickettypedashboardWrapperComponent', () => {
  let component: PromotersctickettypedashboardWrapperComponent;
  let fixture: ComponentFixture<PromotersctickettypedashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersctickettypedashboardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotersctickettypedashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
