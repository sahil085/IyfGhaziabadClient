import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {UserRoleMapping} from "../models/UserRoleMapping";
import {CommonResponseDto} from "../models/CommonResponseDto";

@Injectable({
  providedIn: 'root'
})
export class UserRoleMappingService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(userPerPage, pageNumebr): Observable<UserRoleMapping>{
   return this.http.get<UserRoleMapping>(this.apiUrl + '/getAllUser/' + userPerPage + '/' + pageNumebr);
  }

  changeUserRole(user): Observable<CommonResponseDto>{
    return this.http.put<CommonResponseDto>(this.apiUrl + '/changeUserRole/', user);
  }

}
