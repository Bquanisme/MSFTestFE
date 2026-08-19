import { Component, inject } from '@angular/core';
import { Breadcrumb } from "../../../components/breadcrumb/breadcrumb";
import { MatIcon } from "@angular/material/icon";
import { ModalService } from '../../../service/component/modal/modal-service';

@Component({
  selector: 'app-modal-page',
  imports: [Breadcrumb, MatIcon],
  templateUrl: './modal-page.html',
  styleUrl: './modal-page.css',
})
export class ModalPage {
  
  private modalService = inject(ModalService)

  modalButton = this.modalService.modalButton()
  
}
