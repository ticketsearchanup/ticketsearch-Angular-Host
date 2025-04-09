import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteraccessdetaildashboardWrapperComponent } from './promoteraccessdetaildashboard-wrapper.component';

describe('PromoteraccessdetaildashboardWrapperComponent', () => {
  let component: PromoteraccessdetaildashboardWrapperComponent;
  let fixture: ComponentFixture<PromoteraccessdetaildashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteraccessdetaildashboardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoteraccessdetaildashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
