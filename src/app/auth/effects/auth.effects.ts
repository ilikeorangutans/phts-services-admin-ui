import { AuthService } from './../services/auth.service';
import { Login, AuthActionTypes, LoginSuccess, LoginFailure, LoginRedirect } from './../actions/auth.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { Credentials, User } from '../models/user';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router: Router
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((creds: Credentials) => {
      console.log('authenticating', creds);
      return this.authService.login(creds).pipe(
        map(user => new LoginSuccess({user: new User(creds.username)})),
        catchError(error => of(new LoginFailure(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/welcome']))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap(authed => {
      this.router.navigate(['/login']);
    })
  );
}
