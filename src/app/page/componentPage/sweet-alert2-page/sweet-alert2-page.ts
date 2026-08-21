import { Component, inject } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { SweetAlert2Service } from '../../../service/component/sweet-alert-2/sweet-alert-2-service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-sweet-alert2-page',
  imports: [MatIcon],
  templateUrl: './sweet-alert2-page.html',
  styleUrl: './sweet-alert2-page.css',
})
export class SweetAlert2Page {

  private sweetAlert2Service = inject(SweetAlert2Service)

  private http = inject(HttpClient)

  basicExample = this.sweetAlert2Service.basicExamples()

  toastNotification = this.sweetAlert2Service.toastNotification()

  positioning = this.sweetAlert2Service.positioning()

  isLoading = false;

  currentStep = 1

  handleClickButton(data: any) {
    switch(data.icon) {
      case 'info':
        this.showInfo();
        break;

      case 'success':
        this.showSuccess();
        break;

      case 'error':
        this.showError();
        break;   

      case 'warning':
        this.showWarning();
        break;
    }
  }

  showInfo() {
    Swal.fire({
      title: 'Hello World!',
      text: 'This is a basic SweetAlert2 popup',
      icon: 'info',
      confirmButtonText: 'OK',
    });
  }

  showSuccess() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  }

  showError() {
    Swal.fire({
      title: 'Oops...',
      text: 'Something went wrong!',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }

  showWarning() {
    Swal.fire({
      title: 'Warning!',
      text: 'Please check your input',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
  }


  // Interactive Examples

  confirmDialog(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showDenyButton: true,
      confirmButtonText: "Yes, delete it!",
      denyButtonText: `Cancel`,
      icon: 'warning',
    })
    .then((result) => {
      if (result.isConfirmed) 
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
    });
  }

  async inputEmailAddress() {
    const { value: email } = await Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      showCancelButton: true,
      inputPlaceholder: "Enter your email address",
      inputValidator: (v) => {
        if (!v) return "You need to enter an email!";
        return undefined;
      }
    });
    if (email) Swal.fire(`Entered email: ${email}`);
  }

  async AjaxRequest() {
    const result = await Swal.fire({
      title: 'Submit your GitHub username',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Look up',
      cancelButtonText: 'Cancel',
      inputValidator: (value) => {
        if (!value) {
          return 'Request failed: Error';
        }
        return undefined;
      },

      preConfirm: async (name) => {
        Swal.showLoading();

        try {
          const data = await firstValueFrom(
            this.http.get<any>(
              `https://api.github.com/users/${name}`
            )
          );
          return data;
        } 
        
        catch {
          Swal.showValidationMessage(
            'Request failed: Error'
          );
          return undefined;
        }
      }
    });


    if (result.isConfirmed && result.value) {

      const data = result.value;

      Swal.fire({
        title: `${data.login}'s avatar`,
        imageUrl: data.avatar_url,
        imageAlt: `${data.login}'s avatar`,
      });

    }
  }


  //Advanced Features

  autoCloseTimer() {
    let timerInterval: ReturnType<typeof setInterval>;
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const popup = Swal.getPopup();
        const timer = popup?.querySelector('b');

        if (timer) {
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        }
      },

      willClose: () => {
        clearInterval(timerInterval);
      }

    })
  }


  htmlContent() {
    Swal.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html: `
        You can use <b>bold text</b>,
        <a href="https://sweetalert2.github.io/" autofocus>links</a>,
        and other HTML tags
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        👍 Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        👎
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  }


  customStyling(){
    Swal.fire({
      title: "Custom animation with Animate.css",
      confirmButtonText: "OK",
      showClass: { popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        ` },
      hideClass: { popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        ` }
    });
  }


  withImage() {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }


  //Toast
  handleClickToast(data: any) {
    switch(data.icon) {
      case 'success':
        this.showSuccessToast();
        break;

      case 'info':
        this.showInfoToast();
        break;

      case 'warning':
        this.showWarningToast();
        break;

      case 'error':
        this.showErrorToast();
        break;   
    }
  }

  showInfoToast() {
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: "info",
      title: "Info message here"
    });
  }

  showSuccessToast() {
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: "success",
      title: "Signed in successfully"
    });
  }

  showWarningToast() {
     Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: "warning",
      title: "Warning: Check your input"
    });
  }

  showErrorToast() {
     Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: "error",
      title: "Error occurred!"
    });
  }


  //Positioning
  handleClickPosition(item: any) {
    Swal.fire({
      position: item.icon,
      icon: "success",
      title: `${item.title} Position`,
      showConfirmButton: false,
      timer: 1500
    });
  }


  //Special
  handleClickMixing() {
    const swalWithCustomButtons = Swal.mixin({
      customClass: {
        confirmButton: 'swal-confirm',
        cancelButton: 'swal-cancel',
        actions: 'swal-actions'
      },
      buttonsStyling: false
    });

    swalWithCustomButtons.fire({
      title: 'Are you sure?',
      text: 'This is a mixin example with custom button styling',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, proceed!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    });
  }


  handleStepAlert() {
    Swal.fire({
      title: 'Progress Steps Example',
      currentProgressStep: 0,
      progressSteps: ['1', '2', '3'],
      confirmButtonText: 'OK',
    });
  }

  handleDeleteConfirm() {
    Swal.fire({
      title: "Delete this item?",
      text: "This action cannot be undone!",
      icon: "warning",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      showCancelButton: true,
      showCloseButton: true,

      reverseButtons: true,

    }).then(result => {

      if (!result.isConfirmed) return;

      Swal.showLoading();

      return Swal.fire({
        title: "Deleting...",
        timer: 1000,
        timerProgressBar: true,
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })

    }).then(result => {

      if (!result) return;

      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });

    });
  }
}