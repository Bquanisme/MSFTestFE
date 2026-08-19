import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  modalButton() {
    return [
      {
        id: 1,
        title: 'Small',
        action: 'small',
      },
      {
        id: 2,
        title: 'Medium',
        action: 'medium',
      },
      {
        id: 3,
        title: 'Large',
        action: 'large',
      },
      {
        id: 4,
        title: 'Scrolling',
        action: 'scrolling',
      },
      {
        id: 5,
        title: 'Static',
        action: 'static',
      },
    ]
  }


}
