import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request.class';
import { RequestLine } from '../../requestline/requestline.class';
import { RequestLineService } from '../../requestline/requestline.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  reqLine!: RequestLine;
  request!: Request;
  userM = this.sys._user;

  constructor(
    private reqLsvc: RequestLineService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private sys: SystemService,
    private router: Router
  ) { }

  click(): void {
    this.reqsvc.review(this.request).subscribe({
      next: (res) => {
        
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
    
  remove(reqLi: RequestLine): void {
    this.reqLsvc.remove(reqLi.id).subscribe({
      next: (res) => {
        console.debug("Line is deleted!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    let id = +this.route.snapshot.params["id"]
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
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
