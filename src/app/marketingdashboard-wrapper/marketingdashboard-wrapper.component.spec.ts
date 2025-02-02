import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingdashboardWrapperComponent } from './marketingdashboard-wrapper.component';

describe('MarketingdashboardWrapperComponent', () => {
  let component: MarketingdashboardWrapperComponent;
  let fixture: ComponentFixture<MarketingdashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingdashboardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingdashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
