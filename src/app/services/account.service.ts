import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

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

  getClienteById(id: any) {
    let token = this.getAuthorizationToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };
    return this.http.get(`${environment.api}/clientes/${id}`, requestOptions)
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

}
