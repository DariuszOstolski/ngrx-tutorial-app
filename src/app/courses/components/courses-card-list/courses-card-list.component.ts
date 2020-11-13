import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Course } from '../../model';
import { EditCourseDialogComponent } from '../edit-course-dialog/edit-course-dialog.component';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit, OnDestroy {

  @Input()
  courses: Course[];

  @Output()
  courseChanged = new EventEmitter();

  private subscription: Subscription = Subscription.EMPTY;

  constructor(private dialog: MatDialog, private dialogConfig: MatDialogConfig) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editCourse(course: Course) {
    const dialogConfig = { ...this.dialogConfig };

    dialogConfig.data = {
      dialogTitle: "Edit Course",
      course,
      mode: 'update'
    };

    this.subscription.unsubscribe();
    this.subscription = this.dialog.open(EditCourseDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.courseChanged.emit());
  }

  onDeleteCourse(course: Course) {
  }

}
