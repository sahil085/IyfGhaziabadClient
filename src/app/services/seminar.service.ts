import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Seminar} from '../models/seminar';

@Injectable({
  providedIn: 'root'
})
export class SeminarService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }


  GetSeminarList(itemPerPage, pageNumber): Observable<Seminar[]> {
   return this.http.get<Seminar[]>(this.apiUrl + '/admin/upcomingSeminars/1/' + pageNumber + '/' + itemPerPage);

  }

  bookSeatForSeminar(seminarId, status) {
   return this.http.post(this.apiUrl + '/bookSeatForSeminar/' + seminarId + '/' + status, {});
  }

  cancelSeatForSeminar(seminarRecordId, reason) {

    return this.http.put(this.apiUrl + '/cancelSeatForSeminar/' + seminarRecordId + '/' + reason, {});
  }



}
