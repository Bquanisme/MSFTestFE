import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Widget, WidgetResponse } from '../../typescript/home';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {

  private http = inject(HttpClient)

  private readonly API_URL_Widget = "http://localhost:3000/widgets"

  widget1(): Observable<WidgetResponse> {
    return this.http.get<WidgetResponse>(`${this.API_URL_Widget}/row-1`)
  }

  widget2(): Observable<WidgetResponse>  {
    return this.http.get<WidgetResponse>(`${this.API_URL_Widget}/row-2`)
  }

  widget3(): Observable<WidgetResponse>  {
    return this.http.get<WidgetResponse>(`${this.API_URL_Widget}/row-3`)
  }

  widget4(): Observable<WidgetResponse>  {
    return this.http.get<WidgetResponse>(`${this.API_URL_Widget}/row-4`)
  }

}
