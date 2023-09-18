import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  public emailUser: any = 'No logueado';
  
  constructor(
    private router: Router,
    private userService: UserService,
  ) {}


  ngOnInit(){
    this.emailUser = this.userService.getInfoUsuarioLoggeado();
  }

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

  logOut() {
    this.userService.logOut()
      .then(() => {
        // El cierre de sesión fue exitoso, redirige al usuario a la página de inicio (home) u otra página de tu elección.
        this.router.navigateByUrl('login');
      })
      .catch((error) => {
        // Maneja el error, por ejemplo, muestra un mensaje de error
        console.error('Error al cerrar sesión:', error);
      });
  }


  
}
