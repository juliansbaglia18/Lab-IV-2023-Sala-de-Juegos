import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = { email: 'example@mail.com'  , password: 'password' };
  passwordHidden = true;
  passwordFieldType = 'password';
  mostrarPassword = false;
  

  constructor(private router: Router, private userService: UserService) {}

  login() {
    this.userService.login(this.user)
      .then(() => {
        // Si está registrado, va al Home.
        this.router.navigateByUrl('home');
      })
      .catch((error) => {
        // Mensaje de error. (MODIFICAR)
        console.error('Error al iniciar sesión:', error);
      });
  }
  

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
    this.passwordFieldType = this.passwordHidden ? 'password' : 'text';
  }

  navigateToRegistration() {
    this.router.navigateByUrl('registro');
  }

}
