import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {AdminCourseService} from '../../services/admin-course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  public courseForm : FormGroup;

  constructor(private fb: FormBuilder,
              public adminCourseService: AdminCourseService) {
    this.courseForm = this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      vedicLevel: ['',Validators.required],
      courseType: ['',Validators.required],
      gender: ['',Validators.required]
    })
  }


  public createCourse(){
    console.log(this.courseForm.value);
    this.adminCourseService.createCourseService(this.courseForm.value).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {


  }
}

