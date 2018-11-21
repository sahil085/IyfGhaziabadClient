import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {UserSeminarAttendanceDTO} from '../../models/user-seminar-attendance-dto';

@Component({
  selector: 'app-master-attendance',
  templateUrl: './master-attendance.component.html',
  styleUrls: ['./master-attendance.component.css']
})
export class MasterAttendanceComponent implements OnInit {
  public sub: any;
  public seminarId: any;
  public users: UserSeminarAttendanceDTO[];
  public category = '';

  public query = '';
  public filteredList = [];
  public elementRef;
  dataSource: any;
  displayedColumns: string[] = ['UserName', 'Email'];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  requestMasterAttendance() {
    console.log('You want to search for ' + this.query);
  }

}
