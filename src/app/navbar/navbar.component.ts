import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToHome(){
    this.router.navigateByUrl('home');
  }
  navigateToLogin(){
    this.router.navigateByUrl('login');
  }
  navigateToQuienSoy(){
    this.router.navigateByUrl('quien-soy');
  }

}
