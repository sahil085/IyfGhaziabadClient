import {Component, OnInit, ViewChild} from '@angular/core';
import {Seminar} from '../../models/seminar';
import {SeminarService} from '../../services/seminar.service';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {SharedService} from '../../services/shared.service';
import {UserRoleMappingService} from '../../services/user-role-mapping.service';

@Component({
  selector: 'app-attendance-panel',
  templateUrl: './attendance-panel.component.html',
  styleUrls: ['./attendance-panel.component.css']
})
export class AttendancePanelComponent implements OnInit {

  public seminars: Seminar[];
  public totalPages: any;
  public isLoading: boolean;
  displayedColumns: string[] = ['sNo', 'seminarTitle', 'speakerName', 'seminarDate', 'action'];
  dataSource = new MatTableDataSource();
  currentpage  = 1 ;
  pageSize= 1;
  totalpage: number ;
  Role: string;
  hideView = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  public role: string;


  constructor(public seminarService: SeminarService,
              public sharedService: SharedService,
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
    // this.getAllSeminarOnInit(10,0);

    this.getSeminarListOnInit(2, 0);
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
    this.seminarService.GetSeminarList(event.pageSize, event.pageIndex).subscribe(

      (data) => {
        console.log( data);
        this.dataSource =  new MatTableDataSource(data);
        this.totalpage = Math.ceil(data.length / this.pageSize);
        // this.isLoading = false;
      },(error1) => {
        alert(' OOPS..!! Some Error Occured Please try Again');
        // this.isLoading = false;
      }
    );
    // alert("Current page index: " + event.pageIndex );
  }

  getSeminarListOnInit(itemPerpage, PageIndex) {
    this.seminarService.GetAllSeminar(itemPerpage, PageIndex).subscribe(
      (res) => {
        console.log(res);
        this.seminars = res;
        this.dataSource =  new MatTableDataSource(this.seminars);
        this.totalPages = res['totalPages'];
        this.isLoading = false;
      }, (error1) => {
        console.log('Error message: ' + JSON.stringify(error1));
        alert(' OOPS..!! Some Error Occured Please try Again');
        this.isLoading = false;
      }
    );

  }

  selectSeminar(seminar) {
    console.log('Seminar Selected: ' + JSON.stringify(seminar));
  }
}
