import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {


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


  getReserva(): Observable<any> {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.get(`${environment.api}/reservas`, requestOptions);
  }

  getReservaById(id: any): Observable<any> {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.get(`${environment.api}/reservas/${id}`, requestOptions);
  }

  reservarAula(aula: any): Observable<any> {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.post(`${environment.api}/reservas`, aula, requestOptions);
  }

  deleteReserva(id: any): Observable<any> {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.delete(`${environment.api}/reservas/${id}`, requestOptions);
  }


}
