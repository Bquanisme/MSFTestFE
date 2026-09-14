import { Component, inject, signal } from '@angular/core';
import { Breadcrumb } from "../../../components/breadcrumb/breadcrumb";
import { FormService } from '../../../service/form/form-service';
import { AdvancedForm } from '../../../typescript/home';
import { map } from 'rxjs';

@Component({
  selector: 'app-advanced-form-page',
  imports: [Breadcrumb],
  templateUrl: './advanced-form-page.html',
  styleUrl: './advanced-form-page.css',
})
export class AdvancedFormPage {

  private formService = inject(FormService)

  inputGroupData = signal<AdvancedForm[]>([])

  inputGroup() {
    this.formService.inputGroup()
    .pipe(
      map(res => res.data)
    )
    .subscribe(data => {
      this.inputGroupData.set(data)
    })
  }

}
