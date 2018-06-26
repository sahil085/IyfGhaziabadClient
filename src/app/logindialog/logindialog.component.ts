import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})
export class LogindialogComponent implements OnInit {
  public loginForm: FormGroup;
 public username: string;
  public password: string;
  constructor(
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LogindialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.username = data.username;
    this.password = data.password;

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.email]]
    });
  }

  login(){
    console.log(this.loginForm.value);
    this.auth.logIn(this.loginForm.value).subscribe(data=>{
          console.log(data);
        },err=>{
      console.log(err);
          // this.errorMessage="error :  Username or password is incorrect";
        }
      )
  }

  close() {
    this.dialogRef.close();
  }

}
