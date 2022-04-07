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

  uname: string = "";
  message: string = "Wrong password!";
  placement: string = "";
  pword: string ="";
  user!: User;

  constructor(
    private usersvc: UserService,
    private sys : SystemService,
    private router: Router
  ) { }

  clicked(): void {
    if(this.pword === this.user.password) {
      this.router.navigateByUrl("/request/list")
    }
    if(this.pword != this.user.password) {
      this.placement = this.message;
    }
  }
  submit(): void {
    this.sys._user = null;
    this.usersvc.login(this.uname, this.pword).subscribe({
      next: (res) => {
        this.sys._user = res;
        console.log("Login successful!", res);
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
