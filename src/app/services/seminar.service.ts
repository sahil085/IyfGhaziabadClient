import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Seminar} from '../models/seminar';

@Injectable({
  providedIn: 'root'
})
export class SeminarService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }


  GetSeminarList(itemPerPage,pageNumber) : Observable<Seminar[]>{
    console.log("ayaa");
   return this.http.get<Seminar[]>(this.apiUrl + '/upcomingSeminars/1/' + pageNumber + '/' + itemPerPage);

  }



}
