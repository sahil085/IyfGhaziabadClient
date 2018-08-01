import { Component, OnInit } from '@angular/core';
import {Seminar} from "../../models/seminar";
import {SeminarService} from '../../services/seminar.service';

@Component({
  selector: 'app-attendance-panel',
  templateUrl: './attendance-panel.component.html',
  styleUrls: ['./attendance-panel.component.css']
})
export class AttendancePanelComponent implements OnInit {

  public seminars: Seminar[];
  public totalPages:any;
  public isLoading: boolean;

  constructor(public seminarService: SeminarService) { }

  ngOnInit() {


    this.getSeminarListOnInit(2,0);


  }


  getSeminarListOnInit(itemPerpage,PageIndex){
    this.seminarService.GetSeminarList(itemPerpage, PageIndex).subscribe(
      (res) => {
        console.log(res["upcomingSeminar"]);
        this.seminars = res["upcomingSeminar"];
        this.totalPages= res["totalPages"];
        this.isLoading = false;
      },(error1) => {
        alert(" OOPS..!! Some Error Occured Please try Again");
        this.isLoading = false;
      }
    );

  }

}
