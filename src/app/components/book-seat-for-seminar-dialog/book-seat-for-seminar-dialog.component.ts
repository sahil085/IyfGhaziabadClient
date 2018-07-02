import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SeminarService} from '../../services/seminar.service';

@Component({
  selector: 'app-book-seat-for-seminar-dialog',
  templateUrl: './book-seat-for-seminar-dialog.component.html',
  styleUrls: ['./book-seat-for-seminar-dialog.component.css']
})
export class BookSeatForSeminarDialogComponent implements OnInit {

  public bookingForm: FormGroup;

  constructor(public dialog: MatDialog,
              public fb: FormBuilder,
              public seminarService: SeminarService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.bookingForm = this.fb.group({
      status: ['' , Validators.required]
    });
  }

  ngOnInit() {
    console.log(this.data.seminarId);
  }

  bookSeatForSeminar()
  {
    this.seminarService.bookSeatForSeminar(this.data.seminarId, this.bookingForm.value.status).subscribe(response => {
      console.log(response);
    }, (error) => {
      console.log(error);

    });
  }
}
