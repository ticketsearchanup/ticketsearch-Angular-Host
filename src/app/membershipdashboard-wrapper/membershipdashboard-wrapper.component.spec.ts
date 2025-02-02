import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipdashboardWrapperComponent } from './membershipdashboard-wrapper.component';

describe('MembershipdashboardWrapperComponent', () => {
  let component: MembershipdashboardWrapperComponent;
  let fixture: ComponentFixture<MembershipdashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipdashboardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipdashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
