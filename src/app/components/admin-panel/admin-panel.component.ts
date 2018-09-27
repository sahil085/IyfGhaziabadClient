import { Component, OnInit } from '@angular/core';
import {MatButton, MatDialog, MatDialogConfig} from '@angular/material';
import {LogindialogComponent} from '../../logindialog/logindialog.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

      const role = localStorage.getItem('role');
      if (role !== 'ADMIN' ) {
        console.log(role);
        // window.location.href = '';
        this.openDialog();
      }

    }
  public openDialog() {

    localStorage.setItem('loginCallbackURL', 'admin');
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.position = {
    //   'top': '0',
    //   left: '0'
    // };
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.dialog.open(LogindialogComponent, dialogConfig);

    // const dialogRef = this.dialog.open(LogindialogComponent, dialogConfig);
    //
    // dialogRef.afterClosed().subscribe(
    //   data => console.log("Dialog output:", data)
    // );
  }
  }



