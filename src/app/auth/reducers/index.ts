import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';
import { User } from '../model';


export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined
};


export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    };
  })
);
