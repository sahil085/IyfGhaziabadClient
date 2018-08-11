import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-upcoming-seminar-detail',
  templateUrl: './upcoming-seminar-detail.component.html',
  styleUrls: ['./upcoming-seminar-detail.component.css']
})
export class UpcomingSeminarDetailComponent implements OnInit {

  public seminar = JSON.parse(localStorage.getItem('seminar'));

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
    });
    localStorage.removeItem('seminar');
  }
}
