import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleMappingService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(userPerPage, pageNumebr): Observable<User[]>{
   return this.http.get<User[]>(this.apiUrl + '/getAllUser/' + userPerPage + '/' + pageNumebr);
  }
}
