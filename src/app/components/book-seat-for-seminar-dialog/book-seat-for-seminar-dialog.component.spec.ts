import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSeatForSeminarDialogComponent } from './book-seat-for-seminar-dialog.component';

describe('BookSeatForSeminarDialogComponent', () => {
  let component: BookSeatForSeminarDialogComponent;
  let fixture: ComponentFixture<BookSeatForSeminarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSeatForSeminarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeatForSeminarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
