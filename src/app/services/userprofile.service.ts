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



  getUserDetails(): Observable<User>{
    return this.http.get<User>(this.apiUrl + '/user');
  }

  updateuserDetails(user){
    return this.http.put(this.apiUrl + '/editProfile', user);
  }



}
