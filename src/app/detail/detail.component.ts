import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";
import {Location} from "@angular/common";
import {Subscription} from "rxjs";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  title: string = "Product detail"
  public _product: Product;
  param: Subscription = new Subscription();
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: Location,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((param: ParamMap) => {
        this.id = +param.get("id");
        return this.productService.getProductbyId(this.id);
      })
    )
  }

  ngOnDestroy() {
    this.param.unsubscribe();
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
        this.goBack();
      }
    )
  }

  editProduct() {
    this.router.navigate(['/edit', this.id]).then(() => {
      console.log(this.id);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
