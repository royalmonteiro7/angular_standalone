import { Component, inject, Input } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  //@Input() courses: any[] = [];
  courses: Course[] = [];
  @Input() isAdmin = false;
  //@Output() del = new EventEmitter();
  courseSub!: Subscription;
  private coarseService = inject(CourseService)


  // constructor(private courseService: CourseService){

  // }

  ngOnInit() {
    this.courses = this.coarseService.getCourses();

    this.courseSub = this.coarseService.courses.subscribe({
      next: (courses) => {
        this.courses = courses;
        console.log(this.courses)
      },
      error: (e) => {
        console.log(e)
      },
    })
    //this.getCourses();
  }

  // getCourses() {
  //   const data = localStorage.getItem(Strings.STORAGE_KEY);
  //   console.log(data)
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }

  deleteCourse(course: Course) {
    this.coarseService.deleteCourse(course)
    //   this.del.emit(course);
  }

  ngOnDestroy() {
    console.log('courses destroy')
    if (this.courseSub) this.courseSub.unsubscribe();
  }
}
