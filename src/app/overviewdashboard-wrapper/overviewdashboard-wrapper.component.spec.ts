import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewdashboardWrapperComponent } from './overviewdashboard-wrapper.component';

describe('OverviewdashboardWrapperComponent', () => {
  let component: OverviewdashboardWrapperComponent;
  let fixture: ComponentFixture<OverviewdashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewdashboardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewdashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
