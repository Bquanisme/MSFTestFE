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
        iconButton: 'info',
        action: 'info',
        icon: 'info'
      },
      {
        id: 2,
        title: 'Success',
        iconButton: 'check',
        action: 'check',
        icon: 'success'
      },
      {
        id: 3,
        title: 'Error',
        iconButton: 'clear',
        action: 'clear',
        icon: 'error'
      },
      {
        id: 4,
        title: 'Warning',
        iconButton: 'warning',
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
        iconButton: 'check',
        action: 'check',
        icon: 'success'
      },
      {
        id: 2,
        title: 'Info Toast',
        iconButton: 'info',
        action: 'info',
        icon: 'info'
      },
      {
        id: 3,
        title: 'Warning Toast',
        iconButton: 'warning',
        action: 'warning',
        icon: 'warning'
      },
      {
        id: 4,
        title: 'Error Toast',
        iconButton: 'clear',
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
        iconButton: 'arrow_upward',
        icon: 'top-start'
      },
      {
        id: 2,
        title: 'Top Center',
        iconButton: 'arrow_upward',
        icon: 'top-center'
      },
      {
        id: 3,
        title: 'Top End',
        iconButton: 'arrow_upward',
        icon: 'top-end'
      },
      {
        id: 4,
        title: 'Center Start',
        iconButton: 'arrow_back',
        icon: 'center-start'
      },
      {
        id: 5,
        title: 'Center',
        iconButton: 'gps_fixed',
        icon: 'center'
      },
      {
        id: 6,
        title: 'Center End',
        iconButton: 'arrow_forward',
        icon: 'center-end'
      },
      {
        id: 7,
        title: 'Bottom Start',
        iconButton: 'gps_fixed',
        icon: 'bottom-start'
      },
      {
        id: 8,
        title: 'Bottom Center',
        iconButton: 'arrow_downward',
        icon: 'bottom-center'
      },
      {
        id: 9,
        title: 'Bottom End',
        iconButton: 'arrow_downward',
        icon: 'bottom-end'
      },
    ]
  }

}
