import { Component, inject, signal } from '@angular/core';
import { Breadcrumb } from "../../../components/breadcrumb/breadcrumb";
import { FormService } from '../../../service/form/form-service';
import { AdvancedForm } from '../../../typescript/home';
import { map } from 'rxjs';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-advanced-form-page',
  imports: [Breadcrumb, ReactiveFormsModule],
  templateUrl: './advanced-form-page.html',
  styleUrl: './advanced-form-page.css',
})
export class AdvancedFormPage {

  private formService = inject(FormService)

  private fb = inject(FormBuilder)

  dropdownOpen = signal(false)

  inputGroupData = signal<AdvancedForm[]>([])

  toggleDropdown() : void {
    this.dropdownOpen.update(value => !value)
  }

  inputGroup() {
    this.formService.inputGroup()
    .pipe(
      map(res => res.data)
    )
    .subscribe(data => {
      this.inputGroupData.set(data)
    })
  }

  ngOnInit () {
    this.inputGroup()
  }

  validateForm = this.fb.nonNullable.group({
    firstName: [
      '',
      [
        Validators.required,
      ]
    ],

    lastName: [
      '',
      [
        Validators.required,
      ]
    ],

    userName: [
      '',
      [
        Validators.required,
      ]
    ],

    rememberMe: [false, Validators.requiredTrue]
  })

  
  submitted = false;

  onSubmit(): void {
    this.submitted = true;

    if (this.validateForm.invalid) {
      this.validateForm.markAllAsTouched();
      return;
    }

    const formValue = this.validateForm.getRawValue();

    console.log('data:', formValue);
    
    // Call API ở đây
    // this.authService.login(formValue).subscribe(...)
    
    this.validateForm.reset();

    this.scrollToTop();

    this.submitted = false

  }

  get firstName() {
    return this.validateForm.controls.firstName;
  }

  get lastName() {
    return this.validateForm.controls.lastName;
  }

  get userName() {
    return this.validateForm.controls.userName;
  }

  get rememberMe() {
    return this.validateForm.controls.rememberMe;
  } 


  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (this.dropdownOpen() === true) {
      this.dropdownOpen.set(false)
    }
  }

}
