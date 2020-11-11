import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
