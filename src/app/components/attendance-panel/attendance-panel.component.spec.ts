import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancePanelComponent } from './attendance-panel.component';

describe('AttendancePanelComponent', () => {
  let component: AttendancePanelComponent;
  let fixture: ComponentFixture<AttendancePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
