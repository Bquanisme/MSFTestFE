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


  isModalOpenSmall = false
  isModalOpenMedium = false
  isModalOpenLarge = false
  isModalOpenScrolling = false
  isModalOpenStatic = false

  //small
  openModalSmall() {
    this.isModalOpenSmall = true;
  }

  closeModalSmall() {
    this.isModalOpenSmall = false;
  }

  //medium
  openModalMedium() {
    this.isModalOpenMedium = true;
  }

  closeModalMedium() {
    this.isModalOpenMedium = false;
  }

  //Large
  openModalLarge() {
    this.isModalOpenLarge = true;
  }

  closeModalLarge() {
    this.isModalOpenLarge = false;
  }

  //Scrolling
  openModalScrolling() {
    this.isModalOpenScrolling = true;
  }

  closeModalScrolling() {
    this.isModalOpenScrolling = false;
  }

  //
  openModalStatic() {
    this.isModalOpenStatic = true;
  }

  closeModalStatic() {
    this.isModalOpenStatic = false;
  }


  handleCLick (item: any){
    switch(item.action){
      case 'small':
        this.openModalSmall();
        break;
      
      case 'medium':
        this.openModalMedium();
        break;

      case 'large':
        this.openModalLarge();
        break;

      case 'scrolling':
        this.openModalScrolling();
        break;

      case 'static':
        this.openModalStatic();
        break
    }
  }

}
