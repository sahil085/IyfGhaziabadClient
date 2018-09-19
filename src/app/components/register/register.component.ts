import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {RegistrationService, RegistrationServiceService} from '../../sevices/registration-service.service';
import {RegistrationService} from '../../sevices/registration.service';
import {User} from '../../models/User';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public userform: FormGroup;
  public usr: User;
  public signupProcess = false;
  public isSignupSuccess: boolean;

  constructor( private formBuilder: FormBuilder,
               private registrationService: RegistrationService,
               private router: Router,
               public snackBar: MatSnackBar) {
    $('userForm').on('keyup keypress', function(e) {
      const key = e.keyCode || e.which;
      if (key === 13) {
        e.preventDefault();
        return false;
      }
    });
  }

  ngOnInit() {
    this.userform = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      gender : ['', [Validators.required]],
      mobileNumber: ['', Validators.required],
      alternateMobileNumber: [],
      currentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      city: ['', Validators.required],
      street: [''],
      isInitiated: [''],
      roundsChant: [''],
      facilitatorName: [],
      counslerName: [''],
      seniorFacilitatorName: [''],
      nearestIskconTemple: [''],
      vedicLevel: [''],
      isBrahmchari: [''],
      accept : [''],
      state: ['', Validators.required]
    });
  }


  createUser() {
        console.log(this.userform.value);
        this.signupProcess = true;
        if (this.formvalidation() === false) {
          this.snackBar.open(' Please Make Sure You Have Filled All The Fields', 'Hare krishna', {
            duration: 3000,
          });
        } else {
          this.registrationService.saveNewUser(this.userform.value).subscribe(response => {
            if (response === 'Registered Successfully') {
              this.isSignupSuccess = true;
              this.signupProcess = false;

              this.snackBar.open(response, 'Hare krishna', {
                duration: 2000,
              });
              // setTimeout(function () {
              //   window.location.href = ' ';
              // }, 2000);
            } else {
              this.isSignupSuccess = false;
              this.signupProcess = false;
              this.snackBar.open(response, 'Hare krishna', {
                duration: 2000,
              });
            }
          });
        }

     }
     formvalidation(): boolean {
    // console.log(this.userform.get('nearestIskconTemple').value);
       if (this.userform.get('username').value == null) {
         return false;
       } else if (this.userform.get('password').value == null) {
         return false;
       } else if (this.userform.get('email').value == null || this.userform.get('email').hasError('email') == null) {
         return false;
       } else if (this.userform.get('mobileNumber').value === '') {
         return false;

       } else if (this.userform.get('city').value === '') {
          return false;

        } else if (this.userform.get('currentAddress').value === '') {
         return false;

       } else if (this.userform.get('permanentAddress').value === '') {
         return false;

       } else if (this.userform.get('gender').value == null) {
         return false;

       }
       return true;
     }

  checkValue(event: any) {
    // console.log(event);
    // this.userform.patchValue({accept:"123"});
  }

}
