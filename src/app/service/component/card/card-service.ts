import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardResponse } from '../../../typescript/home';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  private http = inject(HttpClient)

  private readonly API_URL_CARD = "http://localhost:3000/cards"

  card1(): Observable<CardResponse> {
    return this.http.get<CardResponse>(`${this.API_URL_CARD}/row-1`)
  }

  card3(): Observable<CardResponse> {
    return this.http.get<CardResponse>(`${this.API_URL_CARD}/row-3`)
  }

  card4(): Observable<CardResponse> {
    return this.http.get<CardResponse>(`${this.API_URL_CARD}/row-4`)
  }

  card5(): Observable<CardResponse> {
    return this.http.get<CardResponse>(`${this.API_URL_CARD}/row-5`)
  }

  card6(): Observable<CardResponse> {
    return this.http.get<CardResponse>(`${this.API_URL_CARD}/row-6`)
  }

  card7(): Observable<CardResponse> {
    return this.http.get<CardResponse>(`${this.API_URL_CARD}/row-7`)
  }

}
