import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesResolver } from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      courses: CoursesResolver
    }
  },
  {
    path: ':courseUrl',
    component: CourseComponent,
    resolve: {
      courses: CoursesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
