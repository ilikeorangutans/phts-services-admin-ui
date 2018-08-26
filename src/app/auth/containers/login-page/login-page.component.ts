import { Credentials } from './../../models/user';
import { reducers } from './../../reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../reducers';
import * as AuthActions from '../../actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private store: Store<fromAuth.State>
  ) { }

  login(credentials: Credentials) {
    this.store.dispatch(new AuthActions.Login(credentials));
  }

}
