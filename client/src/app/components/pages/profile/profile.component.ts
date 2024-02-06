import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private http: HttpClient)  {}

  email: string = ""
  password: string = ""

  login(){
    const credentials = { email: this.email, password: this.password };
    this.http.post('http://localhost:8000/login', credentials)
      .subscribe({
        next: (response) => {
          console.log('Login successful', response);
        }, error: (error) => {
          console.error('Login failed', error);
        }
      });
  }
}
