import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-register-page',
  imports: [MatIcon, ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  tabLogo = '/tabs.png'

  router = inject(Router)

  private fb = inject(FormBuilder);

  handleReturnDashboard() {
    this.router.navigate(['/'])
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
        Validators.minLength(8)
      ]
    ],

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

    // Call API ở đây
    // this.authService.register(formValue).subscribe(...)
    
    this.registerForm.reset();

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
