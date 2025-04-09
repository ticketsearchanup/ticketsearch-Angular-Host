import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteraccessbasicdashboardWrapperComponent } from './promoteraccessbasicdashboard-wrapper.component';

describe('PromoteraccessbasicdashboardWrapperComponent', () => {
  let component: PromoteraccessbasicdashboardWrapperComponent;
  let fixture: ComponentFixture<PromoteraccessbasicdashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteraccessbasicdashboardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoteraccessbasicdashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
