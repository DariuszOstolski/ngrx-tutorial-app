import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {

  }

  login(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>('/api/login', { email, password });
  }
}
