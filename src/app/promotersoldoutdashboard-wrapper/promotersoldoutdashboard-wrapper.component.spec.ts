import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersoldoutdashboardWrapperComponent } from './promotersoldoutdashboard-wrapper.component';

describe('PromotersoldoutdashboardWrapperComponent', () => {
  let component: PromotersoldoutdashboardWrapperComponent;
  let fixture: ComponentFixture<PromotersoldoutdashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersoldoutdashboardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotersoldoutdashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
