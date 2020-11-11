import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'courses',
  loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
},
{
  path: '**',
  redirectTo: '/'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

