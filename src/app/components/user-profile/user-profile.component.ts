import { Component, OnInit } from '@angular/core';
import {UserprofileService} from "../../services/userprofile.service";
import {User} from "../../models/User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetail: User= new User;
  role: string;
  isAdmin: boolean;
  userId: number;
  public userform: FormGroup;
  isEditable: boolean = false;
  constructor( private  userProfileService: UserprofileService,
               private formBuilder: FormBuilder,
               private route: ActivatedRoute,) { }

  ngOnInit() {

    this.role = localStorage.getItem('role');
    if(this.role == 'ADMIN'){
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
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
      vedicLevel: [''],
      isBrahmchari: [''],
      state: ['', Validators.required],

    });
    this.userProfileService.getUserDetails(this.userId).subscribe( response => {
      console.log(response);
      this.userDetail = response;
      this.userform.patchValue(response);
    });
    this.userform.disable();
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
    this.userProfileService.updateuserDetails(this.userform.value).subscribe(response =>{
      this.userDetail = response;
      this.userform.disable();
    });
  }

}
