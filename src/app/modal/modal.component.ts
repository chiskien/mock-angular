import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {Product} from "../models/product";

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
  @Output() rickRoll = new EventEmitter();

  constructor(public modalRef: MdbModalRef<ModalComponent>,
              private modalService: MdbModalService,
              private productService: ProductService,
              private route: Router,
  ) {
  }

  ngOnInit(): void {
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
        // this.productService.updateProduct(this.id).subscribe()
        break;
      case "cancel":
        break;
    }

  }
}
