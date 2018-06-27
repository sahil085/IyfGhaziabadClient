import {FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  constructor() { }

  title = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.title.hasError('required') ? 'You must enter a title' :
      '';
  }
  ngOnInit() {
  }
}

