import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftvoucherdashboardWrapperComponent } from './giftvoucherdashboard-wrapper.component';

describe('GiftvoucherdashboardWrapperComponent', () => {
  let component: GiftvoucherdashboardWrapperComponent;
  let fixture: ComponentFixture<GiftvoucherdashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftvoucherdashboardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftvoucherdashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
