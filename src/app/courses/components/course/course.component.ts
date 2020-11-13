import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course, Lesson } from '../../model';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course$: Observable<Course>;
  loading$: Observable<boolean>;
  lessons$: Observable<Lesson[]>;

  displayedColumns = ['seqNo', 'description', 'duration'];

  nextPage = 0;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const courseUrl = this.route.snapshot.paramMap.get('courseUrl');
  }

  loadLessonsPage(course: Course) {
    this.nextPage += 1;
  }
}
