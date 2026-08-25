import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgressBarResponse } from '../../../typescript/home';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {

  private http = inject(HttpClient)

  private readonly API_URL_PROGRESS_BAR = "http://localhost:3000/progressBar"

  basicProgressBar(): Observable<ProgressBarResponse> {
    return this.http.get<ProgressBarResponse>(`${this.API_URL_PROGRESS_BAR}/basic`) 
  }

  coloredProgressBar(): Observable<ProgressBarResponse> {
    return this.http.get<ProgressBarResponse>(`${this.API_URL_PROGRESS_BAR}/colored`) 
  }

  stripedProgressBar(): Observable<ProgressBarResponse> {
    return this.http.get<ProgressBarResponse>(`${this.API_URL_PROGRESS_BAR}/striped`) 
  }

  animatedProgressBar(): Observable<ProgressBarResponse> {
    return this.http.get<ProgressBarResponse>(`${this.API_URL_PROGRESS_BAR}/animated`) 
  }

  gradientProgressBar(): Observable<ProgressBarResponse> {
    return this.http.get<ProgressBarResponse>(`${this.API_URL_PROGRESS_BAR}/gradient`) 
  }

  skillsProgressBar(): Observable<ProgressBarResponse> {
    return this.http.get<ProgressBarResponse>(`${this.API_URL_PROGRESS_BAR}/skills`) 
  }

  multipleProgressBar(): Observable<ProgressBarResponse> {
    return this.http.get<ProgressBarResponse>(`${this.API_URL_PROGRESS_BAR}/multiple`) 
  }

  multipleLabelProgressBar(): Observable<ProgressBarResponse> {
    return this.http.get<ProgressBarResponse>(`${this.API_URL_PROGRESS_BAR}/multipleLabel`) 
  }

  multipleProjectProgressBar(): Observable<ProgressBarResponse> {
    return this.http.get<ProgressBarResponse>(`${this.API_URL_PROGRESS_BAR}/multipleProject`) 
  }

}
