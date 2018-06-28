import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {config} from 'rxjs';

@Component({
  selector: 'app-create-seminar',
  templateUrl: './create-seminar.component.html',
  styleUrls: ['./create-seminar.component.css']
})
export class CreateSeminarComponent implements OnInit {
  public seminarForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this.seminarForm = this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      speakerName: ['',Validators.required],
      designation: '',
      date: ['',Validators.required],
      timeFrom: ['',Validators.required],
      timeTill: ['',Validators.required],
      venue: ['',Validators.required],
      category: '',
      seats: ['',[Validators.max(150),Validators.min(10)]]
    })
  }

  public createSeminar(){
    console.log(this.seminarForm.value);
    // this.adminCourseService.createCourseService(this.courseForm.value).subscribe(res => {
    //   console.log(res);
    // });
  }
  ngOnInit() {
  }

}
