import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password-page.html',
  styleUrl: './forget-password-page.css'
})
export class ForgetPasswordPage {

  private fb = inject(FormBuilder);

  router = inject(Router)

  forgotForm = this.fb.nonNullable.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ]
  });

  get email() {
    return this.forgotForm.controls.email;
  }

  isSubmit = false

  onSubmit(): void {

    this.isSubmit = true

    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }

    const email = this.forgotForm.getRawValue();

    console.log('Reset password:', email);

    // Gọi API forgot password ở đây

    this.forgotForm.reset();

    this.isSubmit = false

  }

  backToLogin() {
    this.router.navigate(['/pages/login'])
  }
}