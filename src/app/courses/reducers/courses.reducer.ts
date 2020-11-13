import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { CoursesActions } from '../actions';
import { Course } from '../model';


export interface CoursesState extends EntityState<Course> {
}

export const adapter = createEntityAdapter<Course>();

export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CoursesActions.allCoursesLoaded, (state, action) => {
    return adapter.setAll(action.courses, state);
  }),
);


export const { selectAll } = adapter.getSelectors();
