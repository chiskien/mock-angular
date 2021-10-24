import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Product} from "../models/product";
import {Location} from "@angular/common";
import {Subscription} from "rxjs";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public _product: Product;
  id: number = 0;
  param: Subscription = new Subscription();
  title: string = "Edit Product";

  constructor(private productService: ProductService, private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.route.paramMap.pipe(
      switchMap((param: ParamMap) => {
        this.id = +param.get("id");
        return this.productService.getProductbyId(this.id);
      }), map((product) => this._product = product)
    ).subscribe();
  }

  save(product: Product): void {
    if (this._product) {
      this.productService.updateProduct(this._product)
        .subscribe(() => this.goBack())
    }
  }

  goBack(): void {
    this.location.back();
  }
}
