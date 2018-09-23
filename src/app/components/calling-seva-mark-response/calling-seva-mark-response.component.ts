import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {MarkeAttendanceServiceService} from '../../services/marke-attendance-service.service';

import {UserSeminarAttendanceDTO} from '../../models/user-seminar-attendance-dto';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-calling-seva-mark-response',
  templateUrl: './calling-seva-mark-response.component.html',
  styleUrls: ['./calling-seva-mark-response.component.css']
})
export class CallingSevaMarkResponseComponent implements OnInit {

  public sub: any;
  public seminarId: any;
  public users: UserSeminarAttendanceDTO[];

  public query = '';
  public filteredList = [];
  public elementRef;
  dataSource: any;
  displayedColumns: string[] = ['UserName', 'Email', 'MobileNumber', 'Actions'];
  constructor(private route: ActivatedRoute,
              private markAttendanceService: MarkeAttendanceServiceService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    const role = localStorage.getItem('role');
    if (role !== 'ADMIN' ) {
      window.location.href = '';
    } else {
      this.sub = this.route.params.subscribe(params => {
        this.seminarId = params['id'];
      });
    }
    // this.userService.allGeneres().subscribe(res => this.generes = res);

  }
  filter() {
    if (this.query !== '') {
      this.markAttendanceService.searchUser(this.query).subscribe(res => {
        this.dataSource = res;
      });

    } else {
      this.filteredList = [];
    }
  }

  markResponse(userId, status) {
    this.markAttendanceService.markAttendance(userId, status, this.seminarId).subscribe( res => {
      this.snackBar.open(JSON.stringify(res), 'Thank you', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    });

  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }

  submitResponse() {

  }
}
