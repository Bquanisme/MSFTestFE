import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SweetAlert2Service {

  basicExamples() {
    return [
      {
        id: 1,
        title: 'Basic Alert',
        iconButton: 'fa-solid fa-info-circle',
        action: 'info',
        icon: 'info'
      },
      {
        id: 2,
        title: 'Success',
        iconButton: 'fa-solid fa-check-circle',
        action: 'check',
        icon: 'success'
      },
      {
        id: 3,
        title: 'Error',
        iconButton: 'fa-solid fa-times-circle',
        action: 'clear',
        icon: 'error'
      },
      {
        id: 4,
        title: 'Warning',
        iconButton: 'fa-solid fa-exclamation-triangle',
        action: 'warning',
        icon: 'warning'
      },
    ]
  }


  toastNotification() {
    return [
      {
        id: 1,
        title: 'Success Toast',
        iconButton: 'fa-solid fa-check',
        action: 'check',
        icon: 'success'
      },
      {
        id: 2,
        title: 'Info Toast',
        iconButton: 'fa-solid fa-info',
        action: 'info',
        icon: 'info'
      },
      {
        id: 3,
        title: 'Warning Toast',
        iconButton: 'fa-solid fa-exclamation',
        action: 'warning',
        icon: 'warning'
      },
      {
        id: 4,
        title: 'Error Toast',
        iconButton: 'fa-solid fa-times',
        action: 'clear',
        icon: 'error'
      },
    ]
  }

  positioning(){
    return [
      {
        id: 1,
        title: 'Top Start',
        iconButton: 'fa-solid fa-arrow-up',
        icon: 'top-start'
      },
      {
        id: 2,
        title: 'Top Center',
        iconButton: 'fa-solid fa-arrow-up',
        icon: 'top-center'
      },
      {
        id: 3,
        title: 'Top End',
        iconButton: 'fa-solid fa-arrow-up',
        icon: 'top-end'
      },
      {
        id: 4,
        title: 'Center Start',
        iconButton: 'fa-solid fa-arrow-left',
        icon: 'center-start'
      },
      {
        id: 5,
        title: 'Center',
        iconButton: 'fa-solid fa-crosshairs',
        icon: 'center'
      },
      {
        id: 6,
        title: 'Center End',
        iconButton: 'fa-solid fa-arrow-right',
        icon: 'center-end'
      },
      {
        id: 7,
        title: 'Bottom Start',
        iconButton: 'fa-solid fa-arrow-down',
        icon: 'bottom-start'
      },
      {
        id: 8,
        title: 'Bottom Center',
        iconButton: 'fa-solid fa-arrow-down',
        icon: 'bottom-center'
      },
      {
        id: 9,
        title: 'Bottom End',
        iconButton: 'fa-solid fa-arrow-down',
        icon: 'bottom-end'
      },
    ]
  }

}
