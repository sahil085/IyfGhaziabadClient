import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../User';

@Injectable(
  // {providedIn: 'root'}
)
export class RegistrationService {
  userData: any;
  apiUrl: string = environment.apiUrl;
  constructor(public http: HttpClient) {

  }

  public saveNewUser(data) {
    return this.http.put<User>(this.apiUrl + '/account/register', data);
  }
}

