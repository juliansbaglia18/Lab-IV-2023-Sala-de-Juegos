import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  // Navegar a la página Home
  navigateToHome(){
    this.router.navigateByUrl('home');
  }

  // Navegar a la página Login
  navigateToLogin(){
    this.router.navigateByUrl('login');
  }

  // Navegar a la página Quien Soy
  navigateToQuienSoy(){
    this.router.navigateByUrl('quien-soy');
  }

}
