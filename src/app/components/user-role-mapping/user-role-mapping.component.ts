import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {SharedService} from '../../services/shared.service';
import {UserRoleMappingService} from '../../services/user-role-mapping.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {User} from '../../models/User';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-role-mapping',
  templateUrl: './user-role-mapping.component.html',
  styleUrls: ['./user-role-mapping.component.css']
})
export class UserRoleMappingComponent implements OnInit , AfterViewInit{

  displayedColumns: string[] = ['sNo', 'name', 'email', 'currentRole', 'action'];
  dataSource = new MatTableDataSource();
  currentpage:number = 1;
  pageSize: number = 10;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  public role: string;

  constructor(public sharedService: SharedService,
              public userRoleService: UserRoleMappingService) { }

  ngOnInit() {
   this.role = this.sharedService.role;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  onPaginateChange(event){
    console.log(event.pageSize +" -- "+ event.pageIndex);
    this.currentpage = event.pageIndex;
    this.pageSize = event.pageSize;
    // this.isLoading = true;
    this.userRoleService.getAllUsers(event.pageSize, event.pageIndex).subscribe(

      (data) => {
        console.log( data);
        this.dataSource =  new MatTableDataSource(data);
        // this.isLoading = false;
      },(error1) => {
        alert(" OOPS..!! Some Error Occured Please try Again");
        // this.isLoading = false;
      }
    );
    // alert("Current page index: " + event.pageIndex );
  }

  getAllUserOnInit(userPerpage, pageIndex) {
   this.userRoleService.getAllUsers(userPerpage, pageIndex).subscribe( (data) => {
     console.log(data);
     this.dataSource =  new MatTableDataSource(data);

   }, (error1) => {

   });

  }

  ngAfterViewInit(): void {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllUserOnInit(10,0);


  }

}
