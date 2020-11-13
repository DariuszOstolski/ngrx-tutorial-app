import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model';

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
  courses: Course[];

  @Output()
  courseChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editCourse(course: Course) {
  }

  onDeleteCourse(course: Course) {
  }

}
