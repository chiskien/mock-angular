import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";
import {Location} from "@angular/common";
import {Subscription} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {ModalComponent} from "../modal/modal.component";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  title: string = "Product detail"
  public _product: Product;
  param: Subscription = new Subscription();
  id: number = 0;
  modalRef: MdbModalRef<ModalComponent>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: Location,
              private productService: ProductService,
              private modalService: MdbModalService) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.param = this.activatedRoute.paramMap.pipe(
      switchMap((param: ParamMap) => {
        this.id = +param.get("id");
        return this.productService.getProductbyId(this.id);
      }), map((product) => this._product = product)
    ).subscribe();
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

  openPopUp(id: number) {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {
        id: id
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
