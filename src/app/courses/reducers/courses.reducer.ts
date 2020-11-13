import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CoursesActions } from '../actions';
import { compareCourses, Course } from '../model';


export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({ sortComparer: compareCourses });

export const initialCoursesState = adapter.getInitialState({ allCoursesLoaded: false });

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CoursesActions.allCoursesLoaded, (state, action) => {
    return adapter.setAll(action.courses, { ...state, allCoursesLoaded: true });
  }),
  on(CoursesActions.courseUpdated,
    (state, action) => {
      return adapter.updateOne(action.update, state);
    }
  )
);


export const { selectAll } = adapter.getSelectors();
