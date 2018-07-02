import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  public sessionForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.sessionForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      speakerName: ['', Validators.required],
      courseId: ['', Validators.required],
      date: ['', Validators.required],
      timeFrom: ['', Validators.required],
      timeTill: ['', Validators.required],
      venue: ['', Validators.required],
      iskconCentre: ['',Validators.required],
      seats: ['', [Validators.max(150),Validators.min(10)]]
    })
  }

  public createSession(){
      console.log(this.sessionForm.value);
      // this.adminCourseService.createCourseService(this.courseForm.value).subscribe(res => {
      //   console.log(res);
      // });
    }

  ngOnInit(){ }

}




