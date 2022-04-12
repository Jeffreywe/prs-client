import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../../requestline/requestline.class';
import { RequestLineService } from '../../requestline/requestline.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/system.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  request!: Request;
  showVerBtn: boolean = false;
  userM = this.sys._user;

  constructor(
    private reqsvc: RequestService,
    private sys: SystemService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  setApprove(): void {
    this.reqsvc.approve(this.request).subscribe({
      next: (res) => {
        console.debug("Approved");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  verifyReject(): void {
    this.showVerBtn = false;
    this.reqsvc.reject(this.request).subscribe({
      next: (res) => {
        console.debug("Request rejected.");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  setReject(): void {
    this.showVerBtn = !this.showVerBtn;
  }
  refresh(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.userM = res;
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

}
