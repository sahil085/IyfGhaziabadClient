import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public userform: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userform = this.formBuilder.group({
      username: [],
      email: [],
      password: [],
      gender : [],
      mobileNumber: [],
      alternateMobileNumber: [],
      currentAddress: [],
      permanentAddress: [],
      city: [],
      street: [],
      isInitiated: [],
      roundsChant: [],
      FacilitatorName: [],
      nearestIskconTemple: [],
      vedicLevel: [],
      isBrahmchari: []

    });
  }


  createUser()
  {
console.log(this.userform.value);
  }

}
