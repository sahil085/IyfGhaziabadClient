import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminSeminarService {

  apiUrl: string = environment.apiUrl;

  constructor(public http: HttpClient) { }

  public createSeminarService(seminar): Observable<Object> {
    return this.http.post(this.apiUrl + '/admin/createseminar' , seminar);
  }
}
