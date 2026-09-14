import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdvancedFormResponse } from '../../typescript/home';

@Injectable({
  providedIn: 'root',
})
export class FormService {

  private http = inject(HttpClient)

  private readonly API_URL_FORM = "http://localhost:3000/form"

  inputGroup(): Observable<AdvancedFormResponse> {
    return this.http.get<AdvancedFormResponse>(`${this.API_URL_FORM}/inputGroup`)
  }

}
