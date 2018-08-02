import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {SharedService} from '../../services/shared.service';
import {UserRoleMappingService} from '../../services/user-role-mapping.service';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {User} from '../../models/User';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-role-mapping',
  templateUrl: './user-role-mapping.component.html',
  styleUrls: ['./user-role-mapping.component.css']
})
export class UserRoleMappingComponent implements OnInit {

  displayedColumns: string[] = ['sNo', 'name', 'email', 'currentRole', 'selectRole' , 'action'];
  dataSource = new MatTableDataSource();
  currentpage  = 1 ;
  pageSize= 1;
  totalpage:number ;
  Role:string;
  hideView = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  public role: string;

  constructor(public sharedService: SharedService,
              public userRoleService: UserRoleMappingService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    const role = localStorage.getItem('role');
    if (role !== 'ADMIN' ) {
      console.log(role);
      window.location.href = '';
    }
   this.role = this.sharedService.role;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllUserOnInit(10,0);

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
    this.userRoleService.getAllUsers(event.pageSize, event.pageIndex).subscribe(

      (data) => {
        console.log( data);
        this.dataSource =  new MatTableDataSource(data.userList);
        this.totalpage = data.totalPage;
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

     this.dataSource =  new MatTableDataSource(data.userList);
     this.totalpage = data.totalPage;
     if (data.userList.length == 0){
       this.hideView = true;
     }


   }, (error1) => {

   });

  }

  assignRole(user){



    this.userRoleService.changeUserRole(JSON.parse(JSON.stringify(user))).subscribe( response => {
      if(response.type === 'success'){
        user.currentRole = user.role;
        this.snackBar.open(response.response, 'Hare krishna', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });

      }
    });

  }

  // ngAfterViewInit(): void {
  //
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  //   this.getAllUserOnInit(10,0);
  //
  //
  // }

}
