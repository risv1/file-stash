import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  Auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private http: HttpClient) {}

  email: string = '';
  password: string = '';
  auth = inject(Auth);
  loggedUser: User | undefined;
  register: boolean = false;

  toggleRegister() {
    if (this.register == false) {
      this.register = true;
    } else {
      this.register = false;
    }
  }

  registerEmailPass() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Login successful', userCredential);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log('Error', errorCode, errorMessage);
      });
  }

  registerGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        this.loggedUser = result.user;
        console.log('Login successful', this.loggedUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Login successful', userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}
