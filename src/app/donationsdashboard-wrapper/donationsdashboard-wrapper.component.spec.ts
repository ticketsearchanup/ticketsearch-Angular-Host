import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsdashboardWrapperComponent } from './donationsdashboard-wrapper.component';

describe('DonationsdashboardWrapperComponent', () => {
  let component: DonationsdashboardWrapperComponent;
  let fixture: ComponentFixture<DonationsdashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsdashboardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationsdashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
