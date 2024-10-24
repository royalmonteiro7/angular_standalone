import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //val: number = 2
  // private router = inject(Router)

  //constructor(
  //private router: Router
  //) { }

  // navigate() {
  //   this.router.navigate(['about'])
  // }
}
