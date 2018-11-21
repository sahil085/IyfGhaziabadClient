import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {MarkeAttendanceServiceService} from '../../services/marke-attendance-service.service';

import {UserSeminarAttendanceDTO} from '../../models/user-seminar-attendance-dto';
import {MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';
import {ReportDialogComponent} from '../report-dialog/report-dialog.component';

@Component({
  selector: 'app-mark-attendacne-for-seminar',
  templateUrl: './mark-attendacne-for-seminar.component.html',
  styleUrls: ['./mark-attendacne-for-seminar.component.css']
})
export class MarkAttendacneForSeminarComponent implements OnInit {
  public sub: any;
 public seminarId: any;
 public users: UserSeminarAttendanceDTO[];
 public category = '';

  public query = '';
  public filteredList = [];
  public elementRef;
  dataSource: any;
  displayedColumns: string[] = ['UserName', 'Email', 'MobileNumber', 'Actions'];
  constructor(private route: ActivatedRoute,
              private markAttendanceService: MarkeAttendanceServiceService,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) { }

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

  markAttendance(userId, status) {
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

  openReportDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.position = {
    //   'top': '0',
    //   left: '0'
    // };
    dialogConfig.data = {
      category: this.category
    };
    const dialogRef = this.dialog.open(ReportDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(inputCategory => {
      console.log('The dialog was closed' + inputCategory);
      this.category = inputCategory;
      this.markAttendanceService.generateMasterData(this.category).subscribe(res => {
        console.log(res);
      }, error1 => {
        console.log(error1);
      })
    });
  }


}
