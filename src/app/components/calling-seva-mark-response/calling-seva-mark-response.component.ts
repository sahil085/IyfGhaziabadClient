import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {MarkeAttendanceServiceService} from '../../services/marke-attendance-service.service';

import {UserSeminarAttendanceDTO} from '../../models/user-seminar-attendance-dto';
import {MatSnackBar, MatTableDataSource} from '@angular/material';
import {CallingSewaResponseService} from "../../services/calling-sewa-response.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-calling-seva-mark-response',
  templateUrl: './calling-seva-mark-response.component.html',
  styleUrls: ['./calling-seva-mark-response.component.css']
})
export class CallingSevaMarkResponseComponent implements OnInit {

  public sub: any;
  public seminarId: any;
  public users: User[];
  public totalPages: any;
  currentpage  = 1 ;
  pageSize= 1;
  totalpage: number = 2 ;
  public isLoading: boolean;
  public query = '';
  public filteredList = [];
  public elementRef;
  dataSource: any;
  displayedColumns: string[] = ['UserName', 'isCalled', 'MobileNumber', 'responseStatus','Actions'];
  constructor(private route: ActivatedRoute,
              private callingSewaService: CallingSewaResponseService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    const role = localStorage.getItem('role');

      this.sub = this.route.params.subscribe(params => {
        this.seminarId = params['id'];
      });

    this.getCallingListOnInit(20, 0);

  }
  filter() {
    // if (this.query !== '') {
    //   this.markAttendanceService.searchUser(this.query).subscribe(res => {
    //     this.dataSource = res;
    //   });
    //
    // } else {
    //   this.filteredList = [];
    // }
  }

  // markResponse(userId, status) {
  //   this.markAttendanceService.markAttendance(userId, status, this.seminarId).subscribe( res => {
  //     this.snackBar.open(JSON.stringify(res), 'Thank you', {
  //       duration: 2000,
  //       verticalPosition: 'top',
  //       horizontalPosition: 'center'
  //     });
  //   });
  //
  // }
  getCallingListOnInit(itemPerpage, PageIndex) {
    this.callingSewaService.getCallingSewa(this.seminarId, itemPerpage, PageIndex).subscribe(
      (res) => {
        console.log(res);
        this.dataSource =  new MatTableDataSource(res['callingSewa']);
        this.users = this.dataSource;
        this.totalPages = res['totalPage'];
      }, (error1) => {
        console.log('Error message: ' + JSON.stringify(error1));
        alert(' OOPS..!! Some Error Occured Please try Again');
        this.isLoading = false;
      }
    );

  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }

  submitResponse() {

  }
}
