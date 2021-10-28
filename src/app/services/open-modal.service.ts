import {Injectable} from '@angular/core';
import {ModalComponent} from "../modal/modal.component";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {FormGroup} from "@angular/forms";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {
  modalRef: MdbModalRef<ModalComponent>;

  constructor(private modalService: MdbModalService) {
  }

  openPopUpwithForm(form: FormGroup, product: Product,
                    title: string, text: string, action: string) {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {
        product: product,
        form: form,
        title: title,
        text: text,
        action: action
      },
    });
  }
}
