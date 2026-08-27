import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'basic-form-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './basic-form-page.html',
  styleUrl: './basic-form-page.css'
})
export class BasicFormPage {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  defaultCheckbox = false;
  checkedCheckbox = true;

  inlineCheckbox1 = false;
  inlineCheckbox2 = false;
  inlineCheckbox3 = false;

  selectedRadio = 'default';

  isCheckedDefault = signal(false)
  isCheckedCheck = signal(true)

  isFocusedDefault = true;
  isFocusedChecked = true;

  username = '';
  recipient = '';
  iconUsername = '';
  email = '';
  searchText = '';
  dropdownInput = '';
  firstName = '';
  lastName = '';

  dropdownOpen = false;
  selectedDropdown = 'Dropdown';

  dropdownItems = [
    'Action',
    'Another action',
    'Something else here'
  ];
  

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectDropdown(item: string): void {
    if (item) {
      this.scrollToTop();

      this.selectedDropdown = 'Dropdown';
      this.dropdownOpen = false;
    }
  }

  search(): void {
    console.log('Search:', this.searchText);
  }

  toggleUpdateDefault() {
    this.isCheckedDefault.update(value => !value)
  }
  
  toggleUpdateCheck() {
    this.isCheckedCheck.update(value => !value)
  }





  ngOnInit(): void {
    this.form = this.fb.group({

      // Basic Form
      company: [''],

      email: [
        '',
        [
          Validators.email
        ]
      ],

      password: [
        '',
      ],

      description: [''],

      select: [''],

      multipleSelect: [[]],

      // Form Control Sizing
      largeInput: [''],

      defaultInput: [''],

      smallInput: [''],

      disabledInput: [
        {
          value: 'Disabled input',
          disabled: true
        }
      ],

      readonlyInput: ['Readonly input'],

      fileInput: [null],

      multipleFiles: [null]


      
    });
  }


  onSubmit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;
    }

    console.log('Form value:', this.form.value);
  }


  onReset(): void {

    this.form.reset({
      company: '',
      email: '',
      password: '',
      description: '',
      select: '',
      multipleSelect: [],
      largeInput: '',
      defaultInput: '',
      smallInput: '',
      readonlyInput: 'Readonly input',
      fileInput: null,
      multipleFiles: null
    });

  }


  onFileChange(
    event: Event,
    controlName: string
  ): void {

    const input = event.target as HTMLInputElement;

    if (!input.files) {
      return;
    }

    if (input.multiple) {

      this.form
        .get(controlName)
        ?.setValue(Array.from(input.files));

    } else {

      this.form
        .get(controlName)
        ?.setValue(input.files[0]);

    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}