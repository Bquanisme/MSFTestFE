import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginItem } from '../../../typescript/home';
import { AuthService } from '../../../service/auth/auth-service';
import { Toast } from '../../../components/toast/toast';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, Toast],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  router = inject(Router)

  private fb = inject(FormBuilder);

  private authService = inject(AuthService)

  errorText = signal<string | undefined>('')

  showToastSuccess = signal(false)
  showToastError = signal(false)

  handleCheckPassword = signal(false)

  handleChangePasswordType() {
    this.handleCheckPassword.update(value => !value)
  }

  handleReturnDashboard() {
    this.router.navigate(['/'])
  }

  handleForgetPassword() {
    this.router.navigate(['/pages/forget-password'])
  }

  handleOpenToast() {
    this.showToastSuccess.set(true)

    setTimeout(() => {
      this.showToastSuccess.set(false);
    }, 2000);
  }

  handleCloseToast() {
    this.showToastSuccess.set(false)
  }


  handleOpenToastError() {
    this.showToastError.set(true)

    setTimeout(() => {
      this.showToastError.set(false);
    }, 2000);
  }

  handleCloseToastError() {
    this.showToastError.set(false)
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
        Validators.minLength(6)
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


    console.log(formValue)

    const loginData: LoginItem = {
      email: formValue.email,
      password: formValue.password
    };

    this.authService.login(loginData).subscribe({
      next: (users) => {
        const user = users.find(
          item => item.password === loginData.password
        );

        if (!user) {
          this.errorText.set('Email hoặc password không chính xác.');
          this.handleOpenToastError();
          return;
        }

        // Không lưu password
        const { password, ...userData } = user;

        localStorage.setItem(
          'user-data',
          JSON.stringify(userData)
        );

        this.loginForm.reset({
          email: '',
          password: ''
        });

        this.handleOpenToast();

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },

      error: (err) => {
        console.error(err);

        this.errorText.set(
          err?.error?.error || 'Đăng nhập thất bại.'
        );

        this.handleOpenToastError();
      }
    });
  }

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

}
