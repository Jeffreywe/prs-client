import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './main/user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  _user!: any

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getUserLoggedIn(): Observable<User> {
    return this._user;
  }
  setUserLoggedIn(user: User): void {
    this._user = user;
  }
  
}
