import { Component, OnInit } from '@angular/core';
import {UdgaarService} from '../../services/udgaar.service';
import {LogindialogComponent} from '../../logindialog/logindialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-udgaar-home-page',
  templateUrl: './udgaar-home-page.component.html',
  styleUrls: ['./udgaar-home-page.component.css']
})
export class UdgaarHomePageComponent implements OnInit {
  public isInterested:boolean=true;
  public  isAuthenticated:boolean;

  constructor(public udgaarService: UdgaarService, public dialog: MatDialog) { }

  ngOnInit() {
    var authentication = localStorage.getItem("isAuthenticated");

    console.log(this.isAuthenticated);
    if(authentication == null)
    {
      this.isAuthenticated = false;
      console.log(this.isAuthenticated);
    } else
    {
      this.isAuthenticated = true;
      console.log(this.isAuthenticated);
    }
  }

  public interestButtonDisable(){
    this.isInterested = false;
  }

  public pay(status)
  {
    this.udgaarService.registerUser(status).subscribe(res => {
      console.log(res);
    });
  }

  public showLoginButton(){

    return (this.isAuthenticated && this.isInterested);
  }

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
      title: 'Angular For Beginners',
      // callbackUrl: url;
    };

    this.dialog.open(LogindialogComponent, dialogConfig);

    // const dialogRef = this.dialog.open(LogindialogComponent, dialogConfig);
    //
    // dialogRef.afterClosed().subscribe(
    //   data => console.log("Dialog output:", data)
    // );
  }

}
