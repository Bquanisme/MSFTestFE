import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast {

  message = input('')

  handleCloseToast = output<void>()

  toast = input('')

  toastIcon = input('')

  icon = input('')
}
