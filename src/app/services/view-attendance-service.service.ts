import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {User} from "../models/User";
import {Observable} from "rxjs/Rx";
@Injectable({
  providedIn: 'root'
})
export class ViewAttendanceService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllUsersForSeminar(seminarId, pageSize, pageIndex): Observable<User>{
    return this.http.get<User>(this.apiUrl + '/admin/attendeeBySeminar' + '/' + seminarId + '/' + pageSize + '/' +pageIndex);
  }

}
