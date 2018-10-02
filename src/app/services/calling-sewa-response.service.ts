import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment } from '../../environments/environment';
import {Observable} from "rxjs/Rx";
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CallingSewaResponseService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  markCallingResponse(callingResponse) {
    return this.http.post(this.apiUrl + '/markCallingResponse', callingResponse);

  }

  getCallingSewa(seminarId, itemPerpage, pageIndex): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/callingSewa/${seminarId}/${itemPerpage}/${pageIndex}`);
  }

}
