import { Credentials, User } from './../models/user';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(creds: Credentials): Observable<User> {
    if (creds.username !== creds.password) {
      return throwError('invalid username or password');
    }

    return of(null);
  }

  logout() {
    return of(true);
  }
}
