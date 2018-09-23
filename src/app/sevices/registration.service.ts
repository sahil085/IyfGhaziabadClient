import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable(
  // {providedIn: 'root'}
)
export class RegistrationService {
  userData: any;
  apiUrl: string = environment.apiUrl;
  constructor(public http: HttpClient) {

  }


  public saveNewUser(data) {
    return this.http.put(this.apiUrl + '/account/register', data , {responseType: 'text'});
  }
}

