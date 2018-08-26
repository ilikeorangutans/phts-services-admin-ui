import { LoginFormComponent } from './components/login-form/login-form.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { reducers } from './reducers';
import { AuthEffects } from './effects/auth.effects';
import { ReactiveFormsModule } from '@angular/forms';

export const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: COMPONENTS
})
export class AuthModule { }
