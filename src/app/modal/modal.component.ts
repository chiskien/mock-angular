import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {Product} from "../models/product";
import {FormGroup} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  id: number
  title: string;
  text: string;
  action: string;
  product: Product;
  form: FormGroup;

  @Output() rickRoll = new EventEmitter();

  constructor(public modalRef: MdbModalRef<ModalComponent>,
              private modalService: MdbModalService,
              private productService: ProductService,
              private location: Location,
              private route: Router,
  ) {
  }

  ngOnInit(): void {
    console.log()
  }

  close() {
    this.modalRef.close();
  }

  onClick() {
    switch (this.action) {
      case "create":
        this.product = this.form.value;
        this.productService.createProduct(this.product).subscribe(() => {
          this.location.back();
          console.table(this.product);
          this.modalRef.close();
        });
        break;
      case "delete":
        this.productService.deleteProduct(this.id).subscribe(() => {
          this.route.navigate(['/home']).then(() => {
            window.location.reload();
          })
        })
        break;
      case "reset":
        this.rickRoll.emit();
        break;
      case "update":
        this.product = this.form.value;
        this.productService.updateProduct(this.product).subscribe(() => {
          this.location.back();
          console.table(this.product);
          this.modalRef.close();
        }, () => {
          console.error("Update fail")
        })
        break;
      case "cancel":
        this.location.back();
        this.modalRef.close();
        break;
    }

  }
}
