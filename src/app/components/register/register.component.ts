import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {RegistrationService, RegistrationServiceService} from '../../sevices/registration-service.service';
import {RegistrationService} from '../../sevices/registration.service';
import {User} from '../../User';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public userform: FormGroup;
  public usr: User;
  public signupProcess: boolean = false;
  public isSignupSuccess: boolean;

  constructor( private formBuilder: FormBuilder,
               private registrationService: RegistrationService,
               private router: Router,
               public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userform = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(3)]],
      gender : ['',[Validators.required]],
      mobileNumber: ['',Validators.required],
      alternateMobileNumber: [],
      currentAddress: ['',Validators.required],
      permanentAddress: ['',Validators.required],
      city: ['',Validators.required],
      street: ['',Validators.required],
      isInitiated: ['',Validators.required],
      roundsChant: ['',Validators.required],
      facilitatorName: [],
      counslerName: ['',Validators.required],
      seniorFacilitatorName: ['',Validators.required],
      nearestIskconTemple: ['',Validators.required],
      vedicLevel: ['',Validators.required],
      isBrahmchari: ['',Validators.required],
      accept : ['', Validators.required]

    });
  }


  createUser() {
        console.log(this.userform.value);
        this.signupProcess = true;
        if (this.formvalidation() === false) {
          this.snackBar.open(' Please Make Sure You Have Filled All The Fields', 'Hare krishna', {
            duration: 3000,
          });
        }
        else {
          this.registrationService.saveNewUser(this.userform.value).subscribe(response => {
            if (response === 'Registered Successfully') {
              this.isSignupSuccess = true;
              this.signupProcess= false;

              this.snackBar.open(response, 'Hare krishna', {
                duration: 2000,
              });
              setTimeout(function () {
                location.reload();
              },2000);
            } else {
              this.isSignupSuccess = false;
              this.signupProcess= false;
              this.snackBar.open(response, 'Hare krishna', {
                duration: 2000,
              });
            }
          });
        }

     }
     formvalidation(): boolean {
    // console.log(this.userform.get('nearestIskconTemple').value);
    //    if (this.userform.get('username').value == null) {
    //      return false;
    //    } else if (this.userform.get('password').value == null) {
    //      return false;
    //    } else if (this.userform.get('email').value == null || this.userform.get('email').hasError('email') == null)
    //    {
    //      return false;
    //    } else if (this.userform.get('mobileNumber').value == null) {
    //      return false;
    //
    //    }  else if (this.userform.get('isInitiated').value == null) {
    //      return false;
    //
    //    }else if (this.userform.get('city').value == null)
    //     {
    //       return false;
    //
    //     } else if (this.userform.get('street').value == null)
    //    {
    //      return false;
    //
    //    } else if (this.userform.get('currentAddress').value == null)
    //    {
    //      return false;
    //
    //    } else if (this.userform.get('permanentAddress').value == null)
    //    {
    //      return false;
    //
    //    } else if (this.userform.get('nearestIskconTemple').value == null)
    //    {
    //      return false;
    //
    //    } else if (this.userform.get('accept').value == null || this.userform.get('accept').value === false
    //     || this.userform.get('accept').value === "" )
    //    {
    //      return false;
    //
    //    }
    //    else if (this.userform.get('roundsChant').value == null)
    //    {
    //      return false;
    //
    //    } else if (this.userform.get('gender').value == null) {
    //      return false;
    //
    //    } else{
    //      return true;
    //    }
       return true;
     }

}
