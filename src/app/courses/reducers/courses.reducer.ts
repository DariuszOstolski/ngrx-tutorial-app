import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { stat } from 'fs';
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
)