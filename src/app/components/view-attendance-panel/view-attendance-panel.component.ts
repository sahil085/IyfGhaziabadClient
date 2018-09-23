import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from "@angular/material";
import {ViewAttendanceService} from "../../services/view-attendance-service.service";
import {Seminar} from "../../models/seminar";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-attendance-panel',
  templateUrl: './view-attendance-panel.component.html',
  styleUrls: ['./view-attendance-panel.component.css']
})
export class ViewAttendancePanelComponent implements OnInit {
  public seminars: Seminar[];
  public seminarId: any;
  public totalPages: any;
  public isLoading: boolean;
  displayedColumns: string[] = ['sNo', 'UserName', 'MobileNumber' , 'classLevel', 'attendanceStatus', 'attendanceMarkedBy'];
  dataSource = new MatTableDataSource();
  currentpage  = 1 ;
  public sub: any;
  pageSize= 60;
  totalpage: number = 10 ;
  hideView = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  public role: string;


  constructor(public snackBar: MatSnackBar,
              private route: ActivatedRoute,
              public viewAttendanceService : ViewAttendanceService ) { }

  ngOnInit() {

    const role = localStorage.getItem('role');
    if (role !== 'ADMIN' ) {
      // console.log(role);
      window.location.href = '';
    } else {
      this.sub = this.route.params.subscribe(params => {
        this.seminarId = params['id'];
      });
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.totalpage = 4;
    // this.getAllSeminarOnInit(10,0);

    this.getUserListOnInit(this.seminarId, 10, 0);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onPaginateChange(event){

    this.currentpage = event.pageIndex +1 ;

    this.pageSize = event.pageSize;
    // this.isLoading = true;
    this.viewAttendanceService.getAllUsersForSeminar(this.seminarId, event.pageSize, event.pageIndex).subscribe(

      (data) => {
        this.dataSource =  new MatTableDataSource(data['attendeeList']);
        this.totalpage = data['totalElements'];
        // this.isLoading = false;
      },(error1) => {
        alert(' OOPS..!! Some Error Occured Please try Again');
        // this.isLoading = false;
      }
    );
    // alert("Current page index: " + event.pageIndex );
  }

  getUserListOnInit(seminarId, itemPerpage, pageIndex) {
    this.viewAttendanceService.getAllUsersForSeminar(this.seminarId, itemPerpage, pageIndex).subscribe(

      (data) => {
        this.dataSource =  new MatTableDataSource(data['attendeeList']);
        this.totalpage = data['totalElements'];
        // this.isLoading = false;
      },(error1) => {
        alert(' OOPS..!! Some Error Occured Please try Again');
        // this.isLoading = false;
      }
    );
  }


}
