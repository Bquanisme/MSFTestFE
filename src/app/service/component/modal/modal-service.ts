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
      },
      {
        id: 2,
        title: 'Medium',
      },
      {
        id: 3,
        title: 'Large',
      },
      {
        id: 4,
        title: 'Scrolling',
      },
      {
        id: 5,
        title: 'Static',
      },
    ]
  }

}
