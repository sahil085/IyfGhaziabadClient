import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AuthenticationService} from '../services/authentication.service';
import {AppComponent} from '../app.component';
import {HeaderComponent} from '../header/header.component';
import {HomeComponent} from '../components/home/home.component';

@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})
export class LogindialogComponent implements OnInit {
  public loginForm: FormGroup;
 public username: string;
  public password: string;
  public invalidMessage: string;
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
      username: [this.username , [Validators.required, Validators.email]],
      password: [this.password , Validators.required]
    });
  }

  login(){

    if (this.loginForm.invalid) {
      this.loginForm.get('username').markAsTouched();
      this.loginForm.get('password').markAsTouched();
      return;
    }else {
      console.log(this.loginForm.invalid);
      this.auth.logIn(this.loginForm.value).subscribe(data=>{

          // localStorage.setItem('currentUser', data.json().principal);
          console.log(data.json().principal);
          let authorities = data.json().principal.authorities;
         authorities.forEach(roles => {
          console.log(roles.authority);
           localStorage.setItem('role', roles.authority);

         });


        localStorage.setItem('isAuthenticated', 'true');
          window.location.href = localStorage.getItem('loginCallbackURL');
        },err=>{
          console.log(err);
          if(err.status === 401)
          {
            this.invalidMessage = "EmailId Or Password Is Incorrect";
          }
          // this.errorMessage="error :  Username or password is incorrect";
        }
      );
    }

  }

  close() {
    this.dialogRef.close();
  }

}
