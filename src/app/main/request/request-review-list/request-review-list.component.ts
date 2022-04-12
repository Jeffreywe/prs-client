import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class'
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests: Request[] = [];
  user = this.sys._user;

  constructor(
    private reqsvc: RequestService,
    private sys: SystemService
  ) { }

  addUser(requests: Request[]) {
    for (let r of requests) {
      r.useruName = r.useruName;
    }
  }
  ngOnInit(): void {
    this.sys.checkIfUserLog();
    let userId = this.sys.getUserLoggedIn()!.id;
    this.reqsvc.requests(userId).subscribe({
      next: (res) => {
        this.addUser(res);
        console.debug("Requests:", res);
        this.requests = res;
      },
      error: (err) => console.error(err)
    })
  }

}
