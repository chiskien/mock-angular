import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
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
  title: string = "Fuck the Lawyer"

  public _product: Product;
  index: string[] = ["id", "Date", "RegionName", "Area", "AveragePrice", "Index",
    "SalesVolume", "DetachedPrice", "DetachedIndex"];
  id = Number.parseInt(this.activatedRoute.snapshot.params["id"]);
  param: Subscription

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: Location,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProductbyId(this.id).subscribe((response) => {
      this._product = response;
    });
    this.param = this.activatedRoute.params.subscribe((param: Params) => {
      this.productService.getProductbyId(param["id"])
        .subscribe((response) => {
          this._product = response
        })
    });
  }

  ngOnDestroy() {
    this.param.unsubscribe();
  }

  deleteProduct() {

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
