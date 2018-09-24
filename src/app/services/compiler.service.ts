import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: Http) { }

  executeCode(code){
    return this.http.post(this.apiUrl + '/ttn/compile' , code);
  }
}
