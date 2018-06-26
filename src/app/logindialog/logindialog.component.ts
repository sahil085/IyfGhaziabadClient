import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})
export class LogindialogComponent implements OnInit {
  public loginForm: FormGroup;
 public email: string;
  public password: string;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LogindialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.email= data.email;
    this.password = data.password;

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.email]]
    });
  }

  login() {
    console.log(this.loginForm.value);

    this.dialogRef.close(this.loginForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}
