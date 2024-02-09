import { Component } from '@angular/core';
import { getAuth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  email: string = '';
  password: string = '';

  signout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('Sign-out successful');
    }).catch((error) => {
      console.log('An error happened');
    });
  }
}