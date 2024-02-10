import { Component, OnInit, inject } from '@angular/core';
import { Auth,  signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  email: string | null = '';
  password: string = '';
  auth = inject(Auth)

  ngOnInit(){
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed in');
        this.email = user.email;
      } else {
        console.log('No user is signed in');
      }
    });
  }

  signout(){
    signOut(this.auth).then(() => {
      console.log('Sign-out successful');
    }).catch((error) => {
      console.log('An error happened');
    });
  }
}