import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAttendacneForSeminarComponent } from './mark-attendacne-for-seminar.component';

describe('MarkAttendacneForSeminarComponent', () => {
  let component: MarkAttendacneForSeminarComponent;
  let fixture: ComponentFixture<MarkAttendacneForSeminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkAttendacneForSeminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkAttendacneForSeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
