import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthActions } from '../actions';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  login = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActions.login),
      tap(loginAction => {
        localStorage.setItem('user', JSON.stringify(loginAction.user));
      })
    );
  }, { dispatch: false });

  logout = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActions.logout),
      tap(logoutAction => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login');
      })
    );
  }, { dispatch: false });

  constructor(private actions: Actions, private router: Router) {
  }

}
