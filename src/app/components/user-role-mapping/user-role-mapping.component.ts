import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {SharedService} from '../../services/shared.service';
import {UserRoleMappingService} from '../../services/user-role-mapping.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {User} from '../../models/user';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-role-mapping',
  templateUrl: './user-role-mapping.component.html',
  styleUrls: ['./user-role-mapping.component.css']
})
export class UserRoleMappingComponent implements OnInit {

  displayedColumns: string[] = ['role', 'name'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;


  public role: string;

  constructor(public sharedService: SharedService,
              public userRoleService: UserRoleMappingService) { }

  ngOnInit() {
   this.role = this.sharedService.role;
    this.dataSource.paginator = this.paginator;
   this.getAllUserOnInit(10,0);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getAllUserOnInit(userPerpage, pageIndex) {
   this.userRoleService.getAllUsers(userPerpage, pageIndex).subscribe( (data) => {
     console.log(data);
     this.dataSource =  new MatTableDataSource(data);

   }, (error1) => {

   });

  }

}
export class UserDataSource extends DataSource<any> {
  constructor(private userRoleService: UserRoleMappingService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userRoleService.getAllUsers(10,0);
  }
  disconnect() {}
}
