import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/auth/user/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  })
};

interface User {
  id?: string | null,
  username?: string,
  email?: string,
  password?: string,
  createdAt?: any,
  updateAt?: any
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any>{
    return this.http.post(API_URL + 'signin', {
      email,
      password
    }, httpOptions);
  };

  getMyUserData(id: string, token: string): Observable<any> {
    const header = new HttpHeaders().append('x-acess-token', token)
    return this.http.get(API_URL + id, {
      headers: header
    });
  };

  myProfileDataEdit(id: string, token: string): Observable<any> {
    const header = new HttpHeaders().append('x-acess-token', token)
    return this.http.put(API_URL + 'edit/' + id, {
      headers: header
    });
  };

}
