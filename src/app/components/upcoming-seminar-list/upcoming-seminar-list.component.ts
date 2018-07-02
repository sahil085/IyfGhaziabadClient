import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SeminarService} from '../../services/seminar.service';
import {Seminar} from '../../models/seminar';

@Component({
  selector: 'app-upcoming-seminar-list',
  templateUrl: './upcoming-seminar-list.component.html',
  styleUrls: ['./upcoming-seminar-list.component.css']
})
export class UpcomingSeminarListComponent implements OnInit {


public seminars: Seminar[];
  constructor( private seminarService: SeminarService) { }

  ngOnInit() {
    this.getSeminarListOnInit(10,0);
  }

  onPaginateChange(event){
   this.seminarService.GetSeminarList(event.pageSize, event.pageIndex).subscribe(
     (response) => {
       this.seminars = response;
     },(error1) => {
       alert(" OOPS..!! Some Error Occured Please try Again");
     }
   );
    // alert("Current page index: " + event.pageIndex );
  }

  getSeminarListOnInit(itemPerpage,PageIndex){
    this.seminarService.GetSeminarList(itemPerpage, PageIndex).subscribe(
      (response) => {
        this.seminars = response;
      },(error1) => {
        alert(" OOPS..!! Some Error Occured Please try Again");
      }
    );

  }

}
