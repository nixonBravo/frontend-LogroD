import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api=config.ApiUrl;
  constructor(private readonly http:HttpClient) {}
  register(body:any): Observable<any> {
    return this.http.post<any>(`${this.api}auth/register`, body);
  }
  //metodos consumo de api
  login(body: any): Observable<any> {
    return this.http.post<any>(`${this.api}auth/login`, body);
  }

  userInformation(): Observable<any> {
    return this.http.get<any>(this.api + 'auth/profile');
  }
  logout() {
    return this.http.post(this.api + 'auth/logout', {});
  }

  //metodos para los tokens
  getToken() {
    return localStorage.getItem('token');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  loggedIn(): boolean {
    if (this.isTokenValid()) return true;
    return false;
  }
  private isTokenValid(): boolean {

    const token = localStorage.getItem('token');
    if(!token) return false;
    return true;
  }

  deleteToken() {
    return localStorage.removeItem('token');
  }
}
