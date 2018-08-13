import { Component, OnInit } from '@angular/core';
import {UserprofileService} from "../../services/userprofile.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetail: User;

  constructor( public  userProfileService: UserprofileService) { }

  ngOnInit() {
    console.log ("--------------------------");
    this.userProfileService.getUserDetails().subscribe( response => {
      console.log(response);
      this.userDetail = response;
    });
  }

}
