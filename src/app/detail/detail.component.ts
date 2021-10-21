import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  private _product: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  getProduct(id: number) {
    return this.productService.getProductbyId(id).subscribe((response) => {
      this._product = response
    });
  }

  ngOnInit(): void {
  }
}
