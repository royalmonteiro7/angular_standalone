import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
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
