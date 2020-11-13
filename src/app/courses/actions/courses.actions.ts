import { createAction } from '@ngrx/store';

export const loadAllCourses = createAction(
  '[Courses Resolver] Load All Actions'
);

export const allCoursesLoaded = createAction(
  '[Load Couses Effect] All Courses Loaded'
);
