import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mark-attendacne-for-seminar',
  templateUrl: './mark-attendacne-for-seminar.component.html',
  styleUrls: ['./mark-attendacne-for-seminar.component.css']
})
export class MarkAttendacneForSeminarComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // this.sub = this.route.params.subscribe(params => {
    //   console.log(params['id']);
    // });

  }

}
