import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor( private router: Router) {
    
  }

  register() {
    this.router.navigate(['/register']); // Corrected navigation path and added quotes around 'register'
  }
}