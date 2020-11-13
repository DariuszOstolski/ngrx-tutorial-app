import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { CoursesActions } from '../actions';
import { allCoursesLoaded } from '../actions/courses.actions';
import { Course } from '../model';
import { CoursesService } from '../services';


@Injectable()
export class CoursesEffects {

  loadCourses = createEffect(
    () => {
      return this.actions.pipe(
        ofType(CoursesActions.loadAllCourses),
        concatMap(action => {
          return this.coursesService.findAllCourses()
        }),
        map((courses: Course[]) => {
          return allCoursesLoaded({ courses: courses });
        })
      )
    }
  );

  saveCourse = createEffect(
    () => {
      return this.actions.pipe(
        ofType(CoursesActions.courseUpdated),
        concatMap(action => {
          return this.coursesService.saveCourse(action.update.id, action.update.changes);
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions: Actions, private coursesService: CoursesService) {
  }

}