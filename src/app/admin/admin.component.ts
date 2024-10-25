// import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { CoursesComponent } from '../courses/courses.component';
//import { NgFor } from '@angular/common';
import { Strings } from '../enum/strings.enum';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CoursesComponent
    //NgFor
    //NgIf
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  cover_file!: string;
  cover: any;
  showError = false;
  model: any = {}
  courses: any[] = []

  ngOnInit() {
    this.getCourses()
  }

  getCourses() {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    console.log(data)
    if (data) {

      this.courses = JSON.parse(data);
    }
  }

  onFileSelected(event: any) {
    console.log(event)
    const file = event.target.files[0];
    if (file) {
      this.cover_file = file;
      const reader = new FileReader();
      console.log(reader);

      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        console.log(dataUrl)
        this.cover = dataUrl;
        console.log('image: ', this.cover)
      }
      reader.readAsDataURL(file)
      this.showError = false;
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid || !this.cover) {
      console.log('form invalid')
      form.control.markAllAsTouched();
      if (!this.cover) {
        this.showError = true;
      }
      return;
    }
    console.log(form.value)
    this.saveCourse(form.value)
  }

  saveCourse(formValue: any) {
    console.log(formValue)

    const data = {
      ...formValue,
      image: this.cover,
      id: this.courses.length + 1
    }

    this.courses = [...this.courses, data];

    this.setItem(this.courses)
  }

  deleteCourse(course: any) {
    this.courses = this.courses.filter(course_item => course_item.id !== course.id)
    this.setItem(this.courses)

  }

  setItem(data: any) {
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(this.courses))

  }
}
