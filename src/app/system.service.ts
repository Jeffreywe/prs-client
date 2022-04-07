import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './main/user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  baseUrl: string = "http://localhost:43788/api/users"
  _user!: any

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getLoggedInUser(): Observable<User> {
    return this.http.get(`${this._user}`) as Observable<User>;
  }
  
}
