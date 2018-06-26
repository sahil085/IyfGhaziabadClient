import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public registrationMessage = null;

  // registrationConfirmation() {
  //   if (this.registrationComponent.signUpMessage != null)
  //   {
  //     this.snackBar.open(this.registrationComponent.signUpMessage, 'Hare krishna', {
  //       duration: 2000,
  //     });
  //
  //   }
  // }
  constructor(public snackBar: MatSnackBar) {

    // this.registrationConfirmation();
  }


  ngOnInit() {
  }


}
