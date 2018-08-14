import { Component, OnInit } from '@angular/core';
import {UserprofileService} from "../../services/userprofile.service";
import {User} from "../../models/User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetail: User;
  public userform: FormGroup;
  isEditable: boolean = false;
  constructor( private  userProfileService: UserprofileService,
               private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userProfileService.getUserDetails().subscribe( response => {
      console.log(response);
      this.userDetail = response;
      this.userform.patchValue(response);
    });
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
      state: ['', Validators.required],
      accept : ['']

    });
    // this.userform.disable();
  }
  editInfo(){
    if(!this.isEditable){
      console.log(" enable ");
      this.userform.enable();
      // this.userform.value = this.userDetail;
      this.isEditable = true;
    }else{
      console.log(" disable ");

      this.userform.disable();
      // this.userform.value = this.userDetail;

      this.isEditable = false;
    }

  }
  updateUserInfo(){
    console.log(this.userform.value);
    this.userProfileService.updateuserDetails(this.userform.value).subscribe();
  }

}
