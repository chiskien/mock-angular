import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";
import {Location} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  title: string = "Product detail"

  public _product: Product;
  index: string[] = ["id", "Date", "RegionName", "Area", "AveragePrice", "Index",
    "SalesVolume", "DetachedPrice", "DetachedIndex"];

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
    this.param = this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get("id"));
      this.productService.getProductbyId(this.id).subscribe((response: Product) => {
        this._product = {
          id: response.id,
          Area: response.Area,
          AreaCode: response.AreaCode,
          AveragePrice: response.AveragePrice,
          Date: response.Date,
          DetachedIndex: response.DetachedIndex,
          DetachedPrice: response.DetachedPrice,
          Index: response.Index,
          RegionName: response.RegionName,
        };
        console.log(this._product);
      })
    });
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
