import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models/product";
import {Location} from "@angular/common";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  index: string[] = ["Date", "RegionName", "Area", "AveragePrice", "Index",
    "SalesVolume", "DetachedPrice", "DetachedIndex"];
  public _product: Product;
  id: number;

  constructor(private productService: ProductService, private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.id = Number(param.get("id"));
    })
    this.getProduct();
  }

  getProduct() {
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
