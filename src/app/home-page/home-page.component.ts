import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {OpenModalService} from "../services/open-modal.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  title: string = "Product Table"
  public products$: Product[] = [];
  columns: string[] = ["id", "Date", "Region Name", "Area", "Average Price", "Index", "Sales Volume",
    "Detached Price", "Detached Index"];
  index: string[] = ["id", "Date", "RegionName", "Area", "AveragePrice", "Index",
    "SalesVolume", "DetachedPrice", "DetachedIndex"];

  constructor(private productService: ProductService, private router: Router,
              private modal: OpenModalService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.productService.getProduct().subscribe((response) => {
      this.products$ = response
    })
  }

  isNumber(value): boolean {
    return (typeof value === "number");
  }

  openCreateForm() {
    this.router.navigateByUrl("/create").then(() => console.log("Hello World"));
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.products$ = this.products$.filter(p => p !== product);
    });
  }

  openPopUp(id: number, title: string, text: string, action: string) {
    this.modal.openPopUp(id, title, text, action);
  }

  ngOnDestroy() {
    this.getProducts().unsubscribe();
  }
}
