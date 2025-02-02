import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanningdashboardWrapperComponent } from './scanningdashboard-wrapper.component';

describe('ScanningdashboardWrapperComponent', () => {
  let component: ScanningdashboardWrapperComponent;
  let fixture: ComponentFixture<ScanningdashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanningdashboardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanningdashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
