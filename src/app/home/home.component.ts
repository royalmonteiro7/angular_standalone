import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursesComponent } from "../courses/courses.component";
import { Strings } from '../enum/strings.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  courses: any = []
  //val: number = 2
  // private router = inject(Router)

  //constructor(
  //private router: Router
  //) { }

  // navigate() {
  //   this.router.navigate(['about'])
  // }

  ngOnInit(): void {
    this.getCourses()
  }


  getCourses() {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    console.log(data)
    if (data) {
      this.courses = JSON.parse(data);
    }
  }
}
