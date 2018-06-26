import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {LogindialogComponent} from '../logindialog/logindialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    // dialogConfig.position = {
    //   'top': '0',
    //   left: '0'
    // };
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.dialog.open(LogindialogComponent, dialogConfig);
    //
    // const dialogRef = this.dialog.open(LogindialogComponent, dialogConfig);
    //
    // dialogRef.afterClosed().subscribe(
    //   data => console.log("Dialog output:", data)
    // );
  }


  ngOnInit() {
  }

}

