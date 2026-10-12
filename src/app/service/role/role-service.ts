import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RoleItem } from '../../typescript/home';

@Injectable({
  providedIn: 'root',
})
export class RoleService {

  private http = inject(HttpClient)

  private readonly API_URL = "http://localhost:3000/roles" 

  getRole(): Observable<RoleItem[]> {
    return this.http.get<RoleItem[]>(this.API_URL)
  }

  postRole(item: RoleItem): Observable<RoleItem[]> {
    return this.http.post<RoleItem[]>(this.API_URL, item)
  }

  patchRole(id: string, item: RoleItem): Observable<RoleItem> {
    return this.http.patch<RoleItem>(`${this.API_URL}/${id}`, item)
  }

  deleteRole(id: string): Observable<RoleItem[]> {
    return this.http.delete<RoleItem[]>(`${this.API_URL}/${id}`)
  }


  getRoleNames(roleIds: string[]): Observable<string[]> {
    return this.getRole().pipe(
      map(roles =>
        roleIds
          .map(roleId => roles.find(role => role.id === roleId)?.name)
          .filter((name): name is string => !!name)
      )
    );
  }

}
