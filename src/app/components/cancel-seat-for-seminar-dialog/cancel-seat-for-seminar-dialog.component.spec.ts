import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSeatForSeminarDialogComponent } from './cancel-seat-for-seminar-dialog.component';

describe('CancelSeatForSeminarDialogComponent', () => {
  let component: CancelSeatForSeminarDialogComponent;
  let fixture: ComponentFixture<CancelSeatForSeminarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelSeatForSeminarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelSeatForSeminarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
