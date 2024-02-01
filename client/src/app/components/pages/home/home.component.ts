import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor( private router: Router) {}
  
  file: any;

  getFile(event: any){
    this.file = event.target.files[0];
  
    console.log(this.file);
  }

}
