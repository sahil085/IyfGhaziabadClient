import { Component, OnInit } from '@angular/core';
import {Seminar} from "../../models/seminar";

@Component({
  selector: 'app-attendance-panel',
  templateUrl: './attendance-panel.component.html',
  styleUrls: ['./attendance-panel.component.css']
})
export class AttendancePanelComponent implements OnInit {

  public seminars: Seminar[];
  public totalPages:any;

  constructor() { }

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
