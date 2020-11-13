import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { Course } from '../../model';
import { selectAdvancedCourses, selectBegginerCourses, selectPromoTotal } from '../../selectors/courses.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  promoTotal$: Observable<number>;

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.beginnerCourses$ = this.store.pipe(
      select(
        selectBegginerCourses
      )
    );
    this.advancedCourses$ = this.store.pipe(
      select(
        selectAdvancedCourses
      )
    );
    this.promoTotal$ = this.store.pipe(
      select(
        selectPromoTotal
      )
    );
  }

  reload() {
  }

  onAddCourse() {
  }
}
