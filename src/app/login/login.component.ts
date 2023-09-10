import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = { email: '', password: '' };
  passwordHidden = true;
  passwordFieldType = 'password';
  mostrarPassword = false;

  constructor(private router: Router) {}

  login() {
    // Aquí puedes agregar la lógica de autenticación con Firebase
    // Por ejemplo, verificar las credenciales y redirigir al usuario a la página de inicio (home) si es válido.
    // Si las credenciales no son válidas, puedes mostrar un mensaje de error.
    // Esto es solo un ejemplo básico de cómo podría ser la lógica.
    this.router.navigateByUrl('home');
    // if (this.user.email === 'usuario@example.com' && this.user.password === 'contraseña') {
    //   this.router.navigateByUrl('home');
    // } else {
    //   // Mostrar mensaje de error
    // }
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
    this.passwordFieldType = this.passwordHidden ? 'password' : 'text';
  }

  navigateToRegistration() {
    this.router.navigateByUrl('registro');
  }

}
