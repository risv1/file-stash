import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor( private router: Router, private http: HttpClient) {}
  
  file: any;

  getFile(event: any){
    this.file = event.target.files[0];
  
    console.log(this.file);
  }

  uploadFile(){
    const formData = new FormData();
    formData.append('file', this.file);
  
    this.http.post('http://localhost:8000/upload', formData)
      .subscribe({
        next: (response: any) => {
          console.log('File uploaded', response);
        }, error: (error: Error) => {
          console.error('File upload failed', error);
        }
      });
  }

}
