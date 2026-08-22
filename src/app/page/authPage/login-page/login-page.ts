import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, MatIcon],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  tabLogo = '/tabs.png'

  router = inject(Router)

  private fb = inject(FormBuilder);

  handleReturnDashboard() {
    this.router.navigate(['/'])
  }

  handleForgetPassword() {
    this.router.navigate(['/pages/forget-password'])
  }

  loginForm = this.fb.nonNullable.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ],

    rememberMe: [false]
  });

  submitted = false;

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const formValue = this.loginForm.getRawValue();

    console.log('Login data:', formValue);
    
    // Call API ở đây
    // this.authService.login(formValue).subscribe(...)
    
    this.loginForm.reset();

    this.submitted = false

  }

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

}
