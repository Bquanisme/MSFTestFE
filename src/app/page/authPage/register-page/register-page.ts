import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserItem } from '../../../typescript/home';
import { UserService } from '../../../service/user/user-service';
import { Toast } from '../../../components/toast/toast';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, Toast],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  tabLogo = '/tabs.png'

  router = inject(Router)

  errorText = signal<string | null>(null);
  
  showToastSuccess = signal(false)
  showToastError = signal(false)

  private UserService = inject(UserService)

  private fb = inject(FormBuilder);

  handleReturnDashboard() {
    this.router.navigate(['/'])
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




  registerForm = this.fb.nonNullable.group({
    fullName: [
      '',
      [
        Validators.required,  
        Validators.minLength(6)
      ]
    ],
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

    roleId: [[] as string[]],

    agreePrivate: [
      false,
      [
        Validators.requiredTrue
      ]
    ]
  });

  submitted = false;

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formValue = this.registerForm.getRawValue();

    console.log('Register data:', formValue);

    const id: string | undefined = ""
    
    const userData: UserItem = {
      id,
      username: formValue.fullName,
      email: formValue.email,
      roleId: ['role-1'],
      password: formValue.password
    };

    // Call API ở đây
    this.UserService.postUser(userData).subscribe({
      next: () => {
        this.registerForm.reset({
          fullName: '',
          email: '',
          roleId: [],
          password: ''
        });

        this.handleOpenToast()

        setTimeout(() => {
          this.router.navigate(['/pages/login']);
        }, 2000);
      },
      error: (error) => {
        this.errorText.set(error?.error?.error)
        this.handleOpenToastError()
      },
    })
    

    this.submitted = false

  }

  get fullName() {
    return this.registerForm.controls.fullName;
  }

  get email() {
    return this.registerForm.controls.email;
  }

  get password() {
    return this.registerForm.controls.password;
  }

  scrollToTop(event: Event) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


}
