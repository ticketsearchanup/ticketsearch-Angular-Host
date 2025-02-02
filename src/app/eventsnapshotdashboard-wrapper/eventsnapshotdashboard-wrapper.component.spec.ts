import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsnapshotdashboardWrapperComponent } from './eventsnapshotdashboard-wrapper.component';

describe('EventsnapshotdashboardWrapperComponent', () => {
  let component: EventsnapshotdashboardWrapperComponent;
  let fixture: ComponentFixture<EventsnapshotdashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsnapshotdashboardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsnapshotdashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
