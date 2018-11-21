import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAttendanceComponent } from './master-attendance.component';

describe('MasterAttendanceComponent', () => {
  let component: MasterAttendanceComponent;
  let fixture: ComponentFixture<MasterAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
