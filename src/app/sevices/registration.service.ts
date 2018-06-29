import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../User';
import {text} from '@angular/core/src/render3/instructions';

@Injectable(
  // {providedIn: 'root'}
)
export class RegistrationService {
  userData: any;
  apiUrl: string = environment.apiUrl;
  constructor(public http: HttpClient) {

  }


  public saveNewUser(data) {
    localStorage.removeItem("Authorization");
    return this.http.put(this.apiUrl + '/account/register', data , {responseType: 'text'});
  }
}

