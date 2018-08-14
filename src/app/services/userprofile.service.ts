import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {Observable} from "rxjs/Rx";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserDetails(userId): Observable<User>{
    return this.http.get<User>(this.apiUrl + '/user/' + userId);
  }

  updateuserDetails(user): Observable<User>{
    return this.http.put<User>(this.apiUrl + '/editProfile', user);
  }



}
