import { AuthActionsUnion } from './../actions/auth.actions';
import * as fromAuth from './auth.reducer';
import * as fromRoot from '../../reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface AuthState {
  status: fromAuth.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState, AuthActionsUnion> = {
  status: fromAuth.reducer
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

export const selectAuthStatusState = createSelector(selectAuthState, (state: AuthState) => state.status);

export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);
export const getLoggedIn = createSelector(getUser, user => !!user);
