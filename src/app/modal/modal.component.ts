import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {Product} from "../models/product";
import {FormGroup} from "@angular/forms";

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
      case "delete":
        this.productService.deleteProduct(this.id).subscribe(() => {
          this.route.navigate(['/home']).then(() => {
            window.location.reload();
          })
        })
        break;
      case "reset":
        
        break;
      case "update":
        this.product = this.form.value;
        this.productService.updateProduct(this.product).subscribe(() => {
          console.table(this.product);
        }, () => {
          console.error("Update fail")
        })
        break;
      case "cancel":
        break;
    }

  }
}
