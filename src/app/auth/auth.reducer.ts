import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActionTypes } from './auth.actions';


export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function authReducer(state = initialAuthState, action: Action): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        ...state,
        loggedIn: true,
        user: action.payload
      }

      default:
        return state;
  }
}



