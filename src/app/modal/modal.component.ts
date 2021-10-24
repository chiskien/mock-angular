import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  id: number

  constructor(public modalRef: MdbModalRef<ModalComponent>,
              private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.productService.deleteProduct(this.id).subscribe(() => {
      this.modalRef.close();
    })
  }
}
