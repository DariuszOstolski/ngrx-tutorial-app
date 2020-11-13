import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { AppState } from '../../store';
import { loadAllCourses } from '../actions/courses.actions';
import { selectAllCoursesLoaded } from '../selectors/courses.selectors';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<any> {

  private loading: boolean = false;
  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(selectAllCoursesLoaded),
      tap((coursesLoaded: boolean) => {
        if (this.loading === false && coursesLoaded === false) {
          this.loading = true;
          this.store.dispatch(loadAllCourses());
        }
      }),
      filter(coursesLoaded => coursesLoaded),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }

}