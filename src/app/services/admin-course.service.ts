import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCourseService {
  apiUrl: string = environment.apiUrl;
  constructor(public http: HttpClient) { }

  public createCourseService(course): Observable<Object> {
    return this.http.post(this.apiUrl+'/admin/createcourse',course);

  }
}
