import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {MarkeAttendanceServiceService} from '../../services/marke-attendance-service.service';

import {UserSeminarAttendanceDTO} from '../../models/user-seminar-attendance-dto';

@Component({
  selector: 'app-mark-attendacne-for-seminar',
  templateUrl: './mark-attendacne-for-seminar.component.html',
  styleUrls: ['./mark-attendacne-for-seminar.component.css']
})
export class MarkAttendacneForSeminarComponent implements OnInit {
  public sub: any;
 public seminarId: any;
 public users: UserSeminarAttendanceDTO[];

  public query = '';
  public filteredList = [];
  public elementRef;
  dataSource : any;
  displayedColumns: string[] = ['User Name', 'Email', 'Mobile Number', 'Actions'];
  constructor(private route: ActivatedRoute,
              private markAttendanceService: MarkeAttendanceServiceService) { }

  ngOnInit() {
    const role = localStorage.getItem('role');
    if (role !== 'ADMIN' ) {
      console.log(role);
      window.location.href = '';
    }

    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
      this.seminarId = params['id'];
    });


    // this.userService.allGeneres().subscribe(res => this.generes = res);

  }
  filter() {
    if (this.query !== '') {
      console.log(this.query);
      this.markAttendanceService.searchUser(this.query).subscribe(res => {
        this.dataSource= res;
        console.log(res);
      });

    } else {
      this.filteredList = [];
    }
  }

  markAttendance(userId, status){
    this.markAttendanceService.markAttendance(userId,status,this.seminarId).subscribe( res => {
      console.log(res);
    });

  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }



}
