import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated = false;
  apiUrl: string = environment.apiUrl;

  constructor(private http: Http) {
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

    return this.http.get(this.apiUrl + '/account/login', options);


  }
}
