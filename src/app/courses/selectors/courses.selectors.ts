import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from '../reducers';
import * as fromCourses from '../reducers';
import { Course } from '../model';

export const selectCoursesState = createFeatureSelector<CoursesState>('courses');

export const selectAllCourses = createSelector(
  selectCoursesState,
  fromCourses.selectAll);

export const selectBegginerCourses = createSelector(selectAllCourses,
  (courses: Course[]) => courses.filter(course => course.category === 'BEGINNER'));

export const selectAdvancedCourses = createSelector(selectAllCourses,
  (courses: Course[]) => courses.filter(course => course.category === 'ADVANCED'));

export const selectPromoTotal = createSelector(selectAllCourses,
  (courses: Course[]) => {
    return courses.filter(course => course.promo).length;
  }
);

export const selectAllCoursesLoaded = createSelector(
  selectCoursesState,
  state => state.allCoursesLoaded
);