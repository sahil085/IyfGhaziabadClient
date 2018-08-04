import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';

import {Observable} from "rxjs/Rx";
import {UserSeminarAttendanceDTO} from "../models/user-seminar-attendance-dto";
@Injectable({
  providedIn: 'root'
})
export class MarkeAttendanceServiceService {

  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }


   searchUser(input): Observable<UserSeminarAttendanceDTO[]> {
   return this.http.get<UserSeminarAttendanceDTO[]>(this.apiUrl + '/usersForSeminarAttendance/' + input);
  }

  markAttendance(userId, status, seminarId){
    return this.http.put(this.apiUrl + '/admin/attendance/' + seminarId + '/' + userId + '/' + status,{});
  }
}
