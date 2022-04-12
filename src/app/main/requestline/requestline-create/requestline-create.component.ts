import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  rLine: RequestLine = new RequestLine();
  products!: Product[];
  user: any;

  constructor(
    private reqLsvc: RequestLineService,
    private sys: SystemService,
    private router: Router,
    private route: ActivatedRoute,
    private prodsvc: ProductService
  ) { }

  save(): void {
    this.reqLsvc.create(this.rLine).subscribe({
      next: (res) => {
        console.debug("Line added");
        this.router.navigateByUrl(`/request/lines/${this.rLine.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.rLine.requestId = +this.route.snapshot.params["requestId"];
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
