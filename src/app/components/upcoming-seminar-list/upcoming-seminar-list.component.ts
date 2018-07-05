import {ChangeDetectionStrategy, Component, Injectable, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SeminarService} from '../../services/seminar.service';
import {Seminar} from '../../models/seminar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LogindialogComponent} from '../../logindialog/logindialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {BookSeatForSeminarDialogComponent} from '../book-seat-for-seminar-dialog/book-seat-for-seminar-dialog.component';
import {CancelSeatForSeminarDialogComponent} from '../cancel-seat-for-seminar-dialog/cancel-seat-for-seminar-dialog.component';
declare var $: any;

@Component({
  selector: 'app-upcoming-seminar-list',
  templateUrl: './upcoming-seminar-list.component.html',
  styleUrls: ['./upcoming-seminar-list.component.css']
})
@Injectable()
export class UpcomingSeminarListComponent implements OnInit {


public seminars: Seminar[];
public isLoading: boolean = false;


public bookingForm: FormGroup;

  constructor(public dialog: MatDialog,private seminarService: SeminarService,
               private fb: FormBuilder) { }

  ngOnInit() {
    this.getSeminarListOnInit(10,0);

  }

  onPaginateChange(event){
    this.isLoading = true;
   this.seminarService.GetSeminarList(event.pageSize, event.pageIndex).subscribe(
     (response) => {
       console.log(response);
       this.seminars = response;
       this.isLoading = false;
     },(error1) => {
       alert(" OOPS..!! Some Error Occured Please try Again");
       this.isLoading = false;
     }
   );
    // alert("Current page index: " + event.pageIndex );
  }

  getSeminarListOnInit(itemPerpage,PageIndex){
    this.seminarService.GetSeminarList(itemPerpage, PageIndex).subscribe(
      (response) => {
        this.seminars = response;
        this.isLoading = false;
      },(error1) => {
        alert(" OOPS..!! Some Error Occured Please try Again");
        this.isLoading = false;
      }
    );

  }



  openBookingDialog(id, title) {


    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    // dialogConfig.position = {
    //   'top': '0',
    //   left: '0'
    // };
    dialogConfig.data = {
      seminarId: id,
      seminarTitle: title
    };

    // this.dialog.open(BookSeatForSeminarDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(BookSeatForSeminarDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        this.getSeminarListOnInit(10,0)
      }
    );
  }

  openCancelDialog(id, title){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    // dialogConfig.position = {
    //   'top': '0',
    //   left: '0'
    // };
    dialogConfig.data = {
      seminarRecordId: id,
      seminarTitle: title
    };

    const dialogRef = this.dialog.open(CancelSeatForSeminarDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        this.getSeminarListOnInit(10,0)
      }
    );

  }

}
