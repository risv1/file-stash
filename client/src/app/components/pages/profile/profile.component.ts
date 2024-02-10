import { Component, OnInit, inject } from '@angular/core';
import { Auth,  User,  signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) {}

  auth = inject(Auth)
  loggedUser: User | undefined;

  ngOnInit(){
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.loggedUser = user;
        console.log(user.displayName, user.email);
        console.log('User is signed in');
      } else {
        console.log('No user is signed in');
      }
    });
  }

 signout(){
    signOut(this.auth).then(() => {
      console.log('Sign-out successful');
      window.location.reload();
    }).catch((error) => {
      console.log('An error happened');
    });
  }
}