import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  title: string = "Fuck the Lawer"

  public _product: Product;
  index: string[] = ["id", "Date", "RegionName", "Area", "AveragePrice", "Index",
    "SalesVolume", "DetachedPrice", "DetachedIndex"];
  id = Number.parseInt(this.activatedRoute.snapshot.params["id"]);

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProductbyId(this.id).subscribe((response) => {
      this._product = response;
    });
    this.activatedRoute.params.subscribe((param: Params) => {
      this.productService.getProductbyId(param["id"])
        .subscribe((response) => {
          this._product = response
        })
    });
  }

  deleteProduct() {

  }

  editProduct() {
  }
}
