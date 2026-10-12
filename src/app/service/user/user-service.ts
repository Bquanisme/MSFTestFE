import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserItem } from '../../typescript/home';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient)

  private readonly API_URL = "http://localhost:3000/users" 

  getUser(): Observable<UserItem[]> {
    return this.http.get<UserItem[]>(this.API_URL)
  }
  
  getUserDetail(id: string): Observable<UserItem[]> {
    return this.http.get<UserItem[]>(`${this.API_URL}/${id}`)
  }

  postUser(item: UserItem): Observable<UserItem[]> {
    return this.http.post<UserItem[]>(this.API_URL, item)
  }

  patchUser(id: string, item: UserItem): Observable<UserItem[]> {
    return this.http.patch<UserItem[]>(`${this.API_URL}/${id}`, item)
  }

  deleteUser(id: string): Observable<UserItem[]> {
    return this.http.delete<UserItem[]>(`${this.API_URL}/${id}`)
  }


}
