import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-successful-create-seminar-dialog',
  templateUrl: './successful-create-seminar-dialog.component.html',
  styleUrls: ['./successful-create-seminar-dialog.component.css']
})
export class SuccessfulCreateSeminarDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SuccessfulCreateSeminarDialogComponent>) { }

  ngOnInit() {
  }

  goToAdminPanel() {
    window.location.href = 'admin';
  }
  viewCreatedSeminar() {
    window.location.href = 'upcomingSeminars';
  }

  close() {
    this.dialogRef.close();
  }

}

