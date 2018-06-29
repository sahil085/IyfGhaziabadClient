import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {config} from 'rxjs';
import {AdminSeminarService} from '../../services/admin-seminar.service';
import {MatSnackBar} from '@angular/material';
import {AmazingTimePickerService} from 'amazing-time-picker';

@Component({
  selector: 'app-create-seminar',
  templateUrl: './create-seminar.component.html',
  styleUrls: ['./create-seminar.component.css']
})
export class CreateSeminarComponent implements OnInit {
  public seminarForm: FormGroup;
  constructor(private fb: FormBuilder,
              private atp: AmazingTimePickerService,
              private adminSeminarService: AdminSeminarService,
              public snackBar: MatSnackBar) {

    this.seminarForm = this.fb.group({
      title: ['',Validators.required],
      seminarDescription: ['',Validators.required],
      speakerName: ['',Validators.required],
      speakerDescription: ['', Validators.required],
      date: ['',Validators.required],
      startTime: ['',Validators.required],
      endTime: ['',Validators.required],
      venue: ['',Validators.required],
      category: '',
      totalNumberOfSeats: ['', [Validators.max(150), Validators.min(10)]]
    });
  }

  public createSeminar(){
    console.log(this.seminarForm.value);
    if(this.seminarForm.invalid){
      this.snackBar.open(' Please Fill All Form Fields', 'Hare krishna', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }else{
      this.adminSeminarService.createSeminarService(this.seminarForm.value).subscribe( resp => {
        this.snackBar.open(resp["response"], 'Hare krishna', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        setTimeout(function () {
          window.location.href='create-seminar';
        },2000);
      });
    }
  }

  ngOnInit() {
  }

}
