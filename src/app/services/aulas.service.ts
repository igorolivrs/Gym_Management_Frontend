import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  constructor(private http: HttpClient) { }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getAulas() {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.get(`${environment.api}/aulas`, requestOptions)
  }

  getAulaById(id: any): Observable<any> {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.get(`${environment.api}/aulas/${id}`, requestOptions);
  }

}
