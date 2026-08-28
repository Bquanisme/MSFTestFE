import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderResponse } from '../../../typescript/home';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {

  private http = inject(HttpClient)

  private readonly API_URL_HEADER = "http://localhost:3000/header"

  notificaton(): Observable<HeaderResponse> {
    return this.http.get<HeaderResponse>(`${this.API_URL_HEADER}/notifications`)
  }

  message(): Observable<HeaderResponse> {
    return this.http.get<HeaderResponse>(`${this.API_URL_HEADER}/messages`)
  }

  search(): Observable<HeaderResponse> {
    return this.http.get<HeaderResponse>(`${this.API_URL_HEADER}/search`)
  }


}
