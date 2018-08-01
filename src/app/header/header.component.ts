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
  constructor(public dialog: MatDialog, public auth: AuthenticationService, public appComp: AppComponent) {}

  openDialog() {

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

    console.log(this.isAuthenticated);
    if (authentication == null) {
      this.isAuthenticated = false;
      console.log(this.isAuthenticated);
    } else {
      this.isAuthenticated = true;
      console.log(this.isAuthenticated);
      const role = localStorage.getItem('role');
      if (role != null ) {
        console.log(role);
        this.role = role;
      }

    }




  }

  logout() {
    console.log('logout');
    this.auth.logout();
  }


}

