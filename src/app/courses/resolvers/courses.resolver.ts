import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { finalize, first, tap } from 'rxjs/operators';
import { AppState } from '../../store';
import { loadAllCourses } from '../actions/courses.actions';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<any> {

  private loading: boolean = false;
  constructor(private store: Store<AppState>) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      tap(() => {
        if (this.loading === false) {
          this.loading = true;
          this.store.dispatch(loadAllCourses());          
        }
        
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }

}