import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginItem, UserItem } from '../../typescript/home';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient)

  private router = inject(Router)

  private readonly API_URL = 'http://localhost:3000/users'

  login(loginData: LoginItem): Observable<UserItem[]> {
    return this.http.get<UserItem[]>(
      `${this.API_URL}?email=${loginData.email}`
    );
  }


  getCurrentUser(): UserItem | null {
    const userData = localStorage.getItem('user-data');

    return userData ? JSON.parse(userData) : null;
  }

  getRoleIds(): string[] {
    return this.getCurrentUser()?.roleId ?? [];
  }

  hasRole(roleId: string): boolean {
    return this.getRoleIds().includes(roleId);
  }

  logout() {
    localStorage.removeItem('user-data')
    this.router.navigate(['/'])
  }

}

