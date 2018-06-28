import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';

import { environment } from '../../environments/environment';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated : boolean = false;
  apiUrl: string = environment.apiUrl;

  constructor(private http: Http,public snackBar: MatSnackBar) {
  }

  public logIn(user) {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    // creating base64 encoded String from user name and password
    console.log(user.password);
    const base64Credential: string = btoa(user.username + ':' + user.password);
    console.log(base64Credential);
    headers.append('Authorization', 'Basic ' + base64Credential);
   headers.append( 'Content-Type' , 'application/x-www-form-urlencoded');
    const options = new RequestOptions();
    options.headers = headers;

    localStorage.setItem('Authorization',base64Credential);

    return this.http.get(this.apiUrl + '/account/login', options);


  }

  public logout()
  {
    this.http.post(this.apiUrl + '/account/logout',{}).subscribe( resp => {

      if(resp.status == 200 )
      {
        localStorage.removeItem("isAuthenticated");
        this.snackBar.open("Logout Successfully", 'Hare krishna', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        setTimeout(function () {
          window.location.href="";
        },2000);
      }
    },error1 => {
      this.snackBar.open("Logout Error Please try Again", 'Hare krishna', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
      }
    );
  }
}

