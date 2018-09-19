import {Component, OnInit, ViewChild} from '@angular/core';
import {Seminar} from "../../models/seminar";
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from "@angular/material";
import {UserProfileListService} from "../../services/user-profile-list.service";

@Component({
  selector: 'app-user-profile-list',
  templateUrl: './user-profile-list.component.html',
  styleUrls: ['./user-profile-list.component.css']
})
export class UserProfileListComponent implements OnInit {

  public seminars: Seminar[];
  public totalPages: any;
  public isLoading: boolean;
  displayedColumns: string[] = ['sNo', 'UserName', 'Email', 'MobileNumber' , 'classLevel', 'action'];
  dataSource = new MatTableDataSource();
  currentpage  = 1 ;
  pageSize= 60;
  totalpage: number = 10 ;
  hideView = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  public role: string;


  constructor(public snackBar: MatSnackBar,
              public userListService: UserProfileListService) { }

  ngOnInit() {

    const role = localStorage.getItem('role');
    if (role !== 'ADMIN' ) {
      // console.log(role);
      window.location.href = '';
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.totalpage = 4;
    // this.getAllSeminarOnInit(10,0);

    this.getUserListOnInit(60, 0);
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
    this.userListService.getUserList(event.pageSize, event.pageIndex).subscribe(

      (data) => {
        this.dataSource =  new MatTableDataSource(data['userList']);
        this.totalpage = data['totalPage'];
        // this.isLoading = false;
      },(error1) => {
        alert(' OOPS..!! Some Error Occured Please try Again');
        // this.isLoading = false;
      }
    );
    // alert("Current page index: " + event.pageIndex );
  }

  getUserListOnInit(itemPerpage, pageIndex) {
    this.userListService.getUserList(itemPerpage, pageIndex).subscribe(

      (data) => {
        this.dataSource =  new MatTableDataSource(data['userList']);
        this.totalpage = data['totalPage'];
        // this.isLoading = false;
      },(error1) => {
        alert(' OOPS..!! Some Error Occured Please try Again');
        // this.isLoading = false;
      }
    );
  }

}
