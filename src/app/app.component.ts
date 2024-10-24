import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = "Code With Tech"

  // constructor() {
  //   console.log("constructor")
  // }

  // ngOnInit() {
  //   console.log("ngOnInit")
  //    this.changeTitle();
  // }

  // changeTitle() {
  //   this.title = "Coding Techniques"
  // }
}
