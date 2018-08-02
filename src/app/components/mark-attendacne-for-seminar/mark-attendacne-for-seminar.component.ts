import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mark-attendacne-for-seminar',
  templateUrl: './mark-attendacne-for-seminar.component.html',
  styleUrls: ['./mark-attendacne-for-seminar.component.css']
})
export class MarkAttendacneForSeminarComponent implements OnInit {
  public sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const role = localStorage.getItem('role');
    if (role !== 'ADMIN' ) {
      console.log(role);
      window.location.href = '';
    }

    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
    });

  }

}
