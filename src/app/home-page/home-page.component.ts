import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OpenModalService} from "../services/open-modal.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  title: string = "Product Table"
  itemsPerPage: number = 10;
  currentPage: number = 1;
  public products$: Product[] = [];
  columns: string[] = ["id", "Date", "Region Name", "Area", "Average Price", "Index", "Sales Volume",
    "Detached Price", "Detached Index"];
  index: string[] = ["id", "Date", "RegionName", "Area", "AveragePrice", "Index",
    "SalesVolume", "DetachedPrice", "DetachedIndex"];

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private opanModalService: OpenModalService) {
  }

  ngOnInit(): void {
    this.getProducts(this.itemsPerPage);
  }

  getProducts(item: number) {
    this.itemsPerPage = item;
    return this.productService.getProduct(this.currentPage, this.itemsPerPage)
      .subscribe((response) => {
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

  ngOnDestroy() {
    this.getProducts(this.itemsPerPage).unsubscribe();
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.productService.getProduct(this.currentPage, this.itemsPerPage).subscribe(
      (response) => {
        this.products$ = response;
        console.log(this.currentPage);
      }
    );
  }

  prevPage() {
    if (this.currentPage) {
      this.currentPage = this.currentPage - 1;
      this.productService.getProduct(this.currentPage, this.itemsPerPage)
        .subscribe(
          (response) => {
            this.products$ = response;
            console.log(this.currentPage);
          }
        );
    }
  }

  sort() {
  }

  openPrompt(product: Product) {
    if (confirm("Are you sure to delete this? ")) {
      this.deleteProduct(product);
    }
  }
}
