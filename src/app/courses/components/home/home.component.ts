import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  promoTotal$: Observable<number>;

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;


  constructor() { }

  ngOnInit() {
  }

  reload() {
  }

  onAddCourse() {
  }
}
