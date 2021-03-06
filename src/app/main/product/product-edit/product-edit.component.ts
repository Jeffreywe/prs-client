import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: Product;

  constructor(
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.prodsvc.change(this.product).subscribe({
      next: (res) => {
        console.debug("Product changed!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
