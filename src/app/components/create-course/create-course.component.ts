import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {AdminCourseService} from '../../services/admin-course.service';
import {MatSnackBar} from '@angular/material';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  public courseForm : FormGroup;

  constructor(private fb: FormBuilder,
              public snackBar: MatSnackBar,
              private adminCourseService: AdminCourseService) {
    this.courseForm = this.fb.group({
      tittle: ['',Validators.required],
      description: ['',Validators.required],
      vedicLevel: ['',Validators.required],
      courseType: ['',Validators.required],
      gender: ['',Validators.required],
      duration: ['',Validators.required]
    });
  }


  public createCourse(){
    console.log(this.courseForm.value);

    if(this.courseForm.invalid){
      this.snackBar.open(" Please Fill All Form Fields", 'Hare krishna', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }else{
      this.adminCourseService.createCourseService(this.courseForm.value).subscribe( resp => {
        this.snackBar.open(resp["response"], 'Hare krishna', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        setTimeout(function () {
          window.location.href='create-course';
        },2000);
      });
    }

  }

  ngOnInit() {

  }
}

