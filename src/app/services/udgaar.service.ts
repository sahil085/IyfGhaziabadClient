import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UdgaarService {
  apiUrl: string = environment.apiUrl;
  constructor(public http: HttpClient) { }

  public registerUser(status){
    return this.http.post(this.apiUrl+"/udgaarRegistration",status,{responseType: 'text'});

  }
}
