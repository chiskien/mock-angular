import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalComponent} from "../modal/modal.component";

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
  modalRef: MdbModalRef<ModalComponent>;

  constructor(private productService: ProductService, private router: Router,
              private modalService: MdbModalService) {
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
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {
        id: id,
        title: title,
        text: text,
        action: action
      },
    });
  }

  ngOnDestroy() {
    this.getProducts().unsubscribe();
  }
}
