import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {LogindialogComponent} from '../logindialog/logindialog.component';
import {AuthenticationService} from '../services/authentication.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public  isAuthenticated = false;
  public role: string ;
  public user: any;
  constructor(public dialog: MatDialog, public auth: AuthenticationService, public appComp: AppComponent) {}

  openDialog() {

    localStorage.setItem('loginCallbackURL','');
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
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




  ngOnInit() {

    const authentication = localStorage.getItem('isAuthenticated');
    this.user = JSON.parse(localStorage.getItem('user'));

    if (authentication == null) {
      this.isAuthenticated = false;
    } else {
      this.isAuthenticated = true;
      const role = localStorage.getItem('role');
      if (role != null ) {
        this.role = role;
      }

    }

  }

  isIYFVolunteer() {
    return this.role === 'IYFVolunteer';
  }

  logout() {
    this.auth.logout();
    // this.isAuthenticated = false;
  }


}

