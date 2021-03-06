import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Course } from '../model';

export const loadAllCourses = createAction(
  '[Courses Resolver] Load All Actions'
);

export const allCoursesLoaded = createAction(
  '[Load Couses Effect] All Courses Loaded',
  props<{ courses: Course[] }>()
);

export const courseUpdated = createAction(
  '[Edit Course Dialog] Course updated',
  props<{ update: Update<Course> }>()
);