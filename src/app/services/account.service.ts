import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

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

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.apiAuth}/auth/signin`, user).toPromise();
    if (result && result.token) {
      window.localStorage.setItem('token', result.token);
      return true;
    }

    return false;
  }

  createAccount(account: any): Observable<any> {
    return this.http.post(`${environment.apiAuth}/auth/signup`, account);
  }

  getCliente() {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.get(`${environment.api}/clientes`, requestOptions)
  }

  getClienteById(id: any) {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.get(`${environment.api}/clientes/${id}`, requestOptions)
  }

  updateCliente(id: any, data: any): Observable<any> {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.put(`${environment.api}/clientes/${id}`, data, requestOptions)
  }

  deleteCliente(id: any): Observable<any> {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.delete(`${environment.api}/clientes/${id}`, requestOptions);
  }

}

