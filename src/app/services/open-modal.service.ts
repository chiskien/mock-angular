import {Injectable} from '@angular/core';
import {ModalComponent} from "../modal/modal.component";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {
  modalRef: MdbModalRef<ModalComponent>;

  constructor(private modalService: MdbModalService) {
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
}
