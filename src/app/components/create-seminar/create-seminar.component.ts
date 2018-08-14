import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {config} from 'rxjs';
import {AdminSeminarService} from '../../services/admin-seminar.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar} from '@angular/material';
import {LogindialogComponent} from '../../logindialog/logindialog.component';
import {SuccessfulCreateSeminarDialogComponent} from '../successful-create-seminar-dialog/successful-create-seminar-dialog.component';

@Component({
  selector: 'app-create-seminar',
  templateUrl: './create-seminar.component.html',
  styleUrls: ['./create-seminar.component.css']
})
export class CreateSeminarComponent implements OnInit {
  public seminarForm: FormGroup;
  public formdata = new FormData();
  public file: File;
  public fileType: string;
  selectedFiles: FileList;
  public isLoading = false;
  successDialogRef: MatDialogRef<SuccessfulCreateSeminarDialogComponent>;

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private adminSeminarService: AdminSeminarService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog) {

    this.seminarForm = this.fb.group({
      title: ['', Validators.required],
      seminarDescription: ['', Validators.required],
      speakerName: ['', Validators.required],
      speakerDescription: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      venue: ['', Validators.required],
      city: ['', Validators.required],
      category: ['', Validators.required],
      // fileType: ['', Validators.required],
      totalNumberOfSeats: ['', Validators.required]
    });
  }
  openDialog() {

    // localStorage.setItem('loginCallbackURL','');
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = '250px'
    // dialogConfig.position = {
    //   'top': '100',
    //   'left': '100'
    // };
    dialogConfig.data = {
      id: 1,
      title: 'Create seminar successful'
    };
    this.successDialogRef = this.dialog.open(SuccessfulCreateSeminarDialogComponent, dialogConfig);
    // this.dialog.open(SuccessfulCreateSeminarDialogComponent, dialogConfig);

    // const dialogRef = this.dialog.open(LogindialogComponent, dialogConfig);
    //
    this.successDialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.selectedFiles = undefined;
      this.file = undefined;
      this.selectedFiles = event.target.files;
      this.file = this.selectedFiles.item(0);
      // reader.readAsDataURL(file);
      //
      // reader.onload = () => {
      //   this.seminarForm.patchValue({
      //     file: reader.result
      //   });
      //
      //   // need to run CD since file load runs outside of zone
      //   this.cd.markForCheck();
      // };

    }
  }

  public createSeminar() {
    this.isLoading = true;
    console.log(this.seminarForm.value);
    this.formdata.append('form', new Blob([JSON.stringify(this.seminarForm.value)],
      {
        type: 'application/json'
      }));
    // this.formdata.append("form",this.seminarForm.value);
    this.formdata.append('file', this.file);
    if (this.seminarForm.invalid) {
      this.isLoading = false;
      this.snackBar.open(' Please Fill All Form Fields', 'Hare krishna', {
        duration: 1000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    } else {

      this.adminSeminarService.createSeminarService(this.formdata).subscribe( resp => {
        this.isLoading = false;
        // this.snackBar.open(resp['response'], 'Hare krishna', {
        //   duration: 3000,
        //   verticalPosition: 'top',
        //   horizontalPosition: 'center'
        // });
        this.openDialog();
          setTimeout(function () {
            // window.location.href = 'createSeminar';
          }, 2000);
      });
    }
  }

  ngOnInit() {
    const role = localStorage.getItem('role');
    if (role !== 'ADMIN' ) {
      console.log(role);
      window.location.href = '';
    }
  }

}
