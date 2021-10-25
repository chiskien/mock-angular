import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  id: number
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
    this.productService.deleteProduct(this.id).subscribe(() => {
      this.route.navigate(['/home']).then(() => {
        window.location.reload();
      })
    })
  }
}
