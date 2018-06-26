import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
// import {RegistrationService, RegistrationServiceService} from '../../sevices/registration-service.service';
import {RegistrationService} from '../../sevices/registration.service';
import {User} from '../../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public userform: FormGroup;
  public usr: User;

  constructor( private formBuilder: FormBuilder,
               private registrationService: RegistrationService) { }

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
     this.registrationService.saveNewUser(this.userform.value).subscribe( user =>
      this.usr = user
    );
  }

}
