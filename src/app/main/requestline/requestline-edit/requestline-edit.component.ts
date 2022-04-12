import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  rLine!: RequestLine;
  product!: Product[];

  constructor(
    private reqlsvc: RequestLineService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService,
    private prodsvc: ProductService
  ) { }

  save(): void {
    this.rLine.productId = +this.rLine.productId;
    this.reqlsvc.change(this.rLine).subscribe({
      next: (res) => {
        console.debug("Line changed");
        this.router.navigateByUrl(`/request/lines/${this.rLine.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.product = res;
      },
      error: (err) => console.error(err)
    });
    let id = +this.route.snapshot.params["id"];
    this.reqlsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Line:", res);
        this.rLine = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
