import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  user: any;

  constructor(
    private reqsvc: RequestService,
    private sys: SystemService,
    private router: Router
  ) { }

  save(): void {
    this.reqsvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request added");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.request.user = this.sys.getLoggedInUser()!;
  }

}
