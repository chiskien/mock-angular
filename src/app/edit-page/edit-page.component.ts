import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models/product";
import {Location} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  index: string[] = ["Date", "RegionName", "Area", "AveragePrice", "Index",
    "SalesVolume", "DetachedPrice", "DetachedIndex"];
  public _product: Product;
  id: number = 0;
  param: Subscription = new Subscription();
  title: string = "Fuck the Universe";

  constructor(private productService: ProductService, private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.param = this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get("id"));
      this.productService.getProductbyId(this.id).subscribe((response) => {
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

  save(): void {
    if (this._product) {
      this.productService.updateProduct(this._product)
        .subscribe(() => this.goBack())
    }
  }

  goBack(): void {
    this.location.back();
  }
}
