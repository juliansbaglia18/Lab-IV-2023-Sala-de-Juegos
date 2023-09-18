import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@firebase/auth';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  user = { email: '', password: '', confirmPassword: '' };
  passwordHidden = true;
  passwordFieldType = 'password';
  mostrarPassword = false;



  constructor(
    private router: Router,
    private userService: UserService,
    ) {}

  register() {
    // Llama a la función register del servicio UserService
  this.userService.register({
    email: this.user.email,
    password: this.user.password,
  })
  .then((result) => {
    // El registro fue exitoso, puedes redirigir al usuario a la página de inicio (home)
    this.router.navigateByUrl('home');
  })
  .catch((error) => {
    // Mensaje de error. (MODIFICAR)
    console.error('Error al registrar:', error);
  });
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
    this.passwordFieldType = this.passwordHidden ? 'password' : 'text';
  }

  navigateToLogin() {
    this.router.navigateByUrl('login');
  }
}
