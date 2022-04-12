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
    private router: Router
  ) { }

  getUserLoggedIn(): User {
    return this._user;
  }
  setUserLoggedIn(user: User): void {
    this._user = user;
  }

  get loggedInUser() {
    return this._user != null;
  }

  checkIfUserLog(): void {
    if(!this.loggedInUser) {
      this.router.navigateByUrl("/user/login");
    }
  }
  
}
