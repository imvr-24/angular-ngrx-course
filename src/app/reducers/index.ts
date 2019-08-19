import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
import { AuthActionTypes } from '../auth/auth.actions';

// type AuthState = {
//   loggedIn: boolean,
//   user: User
// };

// const initialState: AuthState = {
//   loggedIn: false,
//   user: undefined
// };

// tslint:disable-next-line: no-empty-interface
export interface AppState {
  // Data content of the store.

  // auth: AuthState;
}

// calculate the new store state


export const reducers: ActionReducerMap<AppState> = {

  // auth: authReducer

};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
