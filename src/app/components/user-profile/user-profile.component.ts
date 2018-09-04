import { Component, OnInit } from '@angular/core';
import {UserprofileService} from '../../services/userprofile.service';
import {User} from '../../models/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetail: User = new User;
  role: string;
  isAdmin: boolean;
  userId: number;
  public userform: FormGroup;
  isEditable = false;
  nextPage = false;
  constructor( private  userProfileService: UserprofileService,
               private formBuilder: FormBuilder,
               private route: ActivatedRoute, public snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(localStorage.getItem('Authorization'));
    this.role = localStorage.getItem('role');
    if (this.role !== 'ADMIN') {
      this.isAdmin = false;
    } else {
      this.isAdmin = true;
      this.nextPage = false;
    }

    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });


    this.userform = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender : ['', [Validators.required]],
      mobileNumber: ['', Validators.required],
      alternateMobileNumber: [],
      currentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      city: ['', Validators.required],
      isInitiated: [''],
      roundsChant: [''],
      facilitatorName: [],
      counslerName: [''],
      seniorFacilitatorName: [''],
      nearestIskconTemple: [''],
      classLevel: [''],
      isBrahmchari: [''],
      state: ['', Validators.required],

    });
    this.userProfileService.getUserDetails(this.userId).subscribe( response => {
      this.userDetail = response;
      this.userform.patchValue(this.userDetail);
    });
    this.userform.disable();
  }
  editInfo() {
    if (!this.isEditable) {
      this.userform.enable();
      // this.userform.value = this.userDetail;
      this.isEditable = true;
    } else {

      this.userform.disable();
      // this.userform.value = this.userDetail;

      this.isEditable = false;
    }
  }

  changePage() {
    this.nextPage = !this.nextPage;
  }

  updateUserInfo() {
    if (this.userform.invalid) {
      this.snackBar.open(' Please Fill All Form Fields', 'Hare krishna', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    } else {
      this.userProfileService.updateuserDetails(this.userform.value).subscribe(response => {
        if(response){
          this.snackBar.open(' Profile updated Successfully', 'Hare krishna', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        }
        this.userDetail = response;
        this.userform.disable();
      });
    }
  }
}
