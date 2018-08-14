import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulCreateSeminarDialogComponent } from './successful-create-seminar-dialog.component';

describe('SuccessfulCreateSeminarDialogComponent', () => {
  let component: SuccessfulCreateSeminarDialogComponent;
  let fixture: ComponentFixture<SuccessfulCreateSeminarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulCreateSeminarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulCreateSeminarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
