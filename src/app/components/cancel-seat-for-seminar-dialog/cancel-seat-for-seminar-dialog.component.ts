import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {SeminarService} from '../../services/seminar.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cancel-seat-for-seminar-dialog',
  templateUrl: './cancel-seat-for-seminar-dialog.component.html',
  styleUrls: ['./cancel-seat-for-seminar-dialog.component.css']
})
export class CancelSeatForSeminarDialogComponent implements OnInit {

  public cancelSeatForSeminarForm: FormGroup;
  public seminarTitle: string = '';

  constructor(public dialog: MatDialog,
              public fbu: FormBuilder,
              public seminarService: SeminarService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.cancelSeatForSeminarForm = this.fbu.group({
           reason : ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  cancelSeatForSeminar() {
    console.log('ayaaa' + this.cancelSeatForSeminarForm.value.reason);
    this.seminarService.cancelSeatForSeminar(this.data.seminarRecordId, this.cancelSeatForSeminarForm.value.reason).
      subscribe( (response) => {
        console.log(response );

    }, (error1) => {
        console.log(error1.error.message);
    });

  }

}
