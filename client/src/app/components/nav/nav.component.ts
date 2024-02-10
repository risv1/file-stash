import { Component, OnInit, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  constructor(private router: Router) { }

  auth = inject(Auth)
  signedIn: boolean = false

  ngOnInit(){
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.signedIn = true;
        console.log('User is signed in');
      } else {
        console.log('No user is signed in');
      }
    });
  }

  goTo(route: string){
    this.router.navigate([route]);
  }

}
