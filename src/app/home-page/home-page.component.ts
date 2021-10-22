import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  title: string = "Fuck the police"
  public product$: Product[] = [];
  columns: string[] = ["Date", "Region Name", "Area", "Average Price", "Index", "Sales Volume",
    "Detached Price", "Detached Index"];
  index: string[] = ["Date", "RegionName", "Area", "AveragePrice", "Index",
    "SalesVolume", "DetachedPrice", "DetachedIndex"];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.productService.getProduct().subscribe((response) => {
      this.product$ = response
    })
  }

  isNumber(value): boolean {
    return (typeof value === "number");
  }

  openCreateForm() {
    this.router.navigateByUrl("/create").then(() => console.log("Hello World"));
  }

  ngOnDestroy() {
    this.getProducts().unsubscribe();
  }
}
