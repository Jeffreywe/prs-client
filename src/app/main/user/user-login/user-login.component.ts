import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private usersvc: UserService,
    private sys : SystemService,
    private router: Router
  ) { }

  
  submit(): void {
    this.sys._user = null;
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res) => {
        this.sys.setUserLoggedIn(res as User);
        this.router.navigateByUrl("/request/list")
      },
      error: (err) => {
        console.error("Login unsuccessful!");
      }
    });
  }

  ngOnInit(): void {
  }

}
