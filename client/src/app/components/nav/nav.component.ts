import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private router: Router) { }

  signedIn: boolean = false;

  goTo(route: string){
    this.router.navigate([route]);
  }

}
