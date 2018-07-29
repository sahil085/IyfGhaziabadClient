import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public role: string;
  public isAuthenticated: boolean;

  constructor() {
    let authentication = localStorage.getItem('isAuthenticated');
    if (authentication == null)
    {
      this.isAuthenticated  = false;
      window.location.href = '';
    } else{
      this.role = localStorage.getItem('role');
    }
  }
}
