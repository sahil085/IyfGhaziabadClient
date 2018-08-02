import { Component, OnInit } from '@angular/core';
import {MatButton} from '@angular/material';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      const role = localStorage.getItem('role');
      if (role !== 'ADMIN' ) {
        console.log(role);
        window.location.href = '';
      }

    }

  }


