import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AddAulasService {

  constructor(private http: HttpClient) { }
  
  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  createAula(aula: any): Observable<any> {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.post(`${environment.api}/aulas`, aula, requestOptions);
  }

  getNiveis() {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.get(`${environment.api}/niveis`, requestOptions)
  }
}
