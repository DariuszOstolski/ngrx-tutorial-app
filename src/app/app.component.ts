import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthActions, AuthSelectors } from './auth';
import { AppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loading = false;
  isLoggedIn: Observable<boolean>;
  isLoggedOut: Observable<boolean>;

  title = 'ngrx-app';
  private subscription: Subscription = Subscription.EMPTY;

  constructor(private router: Router, private store: Store<AppState>) {

  }

  ngOnInit() {
    this.subscription.unsubscribe();
    this.subscription = this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart:
          this.loading = true;
          break;
        case event instanceof NavigationEnd:
        case event instanceof NavigationError:
        case event instanceof NavigationCancel:
          this.loading = false;
          break;
      }
    });

    const user = localStorage.getItem('user');
    if (user) {
      this.store.dispatch(AuthActions.login({ user: JSON.parse(user) }));
    }
    this.isLoggedIn = this.store.pipe(select(AuthSelectors.isLoggedIn));
    this.isLoggedOut = this.store.pipe(select(AuthSelectors.isLoggedOut));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
