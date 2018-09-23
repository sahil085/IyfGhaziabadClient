import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendancePanelComponent } from './view-attendance-panel.component';

describe('ViewAttendancePanelComponent', () => {
  let component: ViewAttendancePanelComponent;
  let fixture: ComponentFixture<ViewAttendancePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAttendancePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAttendancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
