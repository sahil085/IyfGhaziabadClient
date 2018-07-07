import { Component, OnInit, ViewChild } from '@angular/core';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}



/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-recent-seminar-list',
  templateUrl: './recent-seminar-list.component.html',
  styleUrls: ['./recent-seminar-list.component.css']
})
export class RecentSeminarListComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {

  }
}


