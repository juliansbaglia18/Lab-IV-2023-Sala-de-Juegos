import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  register() {
    // Aquí puedes agregar la lógica de registro con Firebase
    // Por ejemplo, crear una cuenta de usuario con el email y la contraseña
    // y luego redirigir al usuario a la página de inicio (home) si el registro es exitoso.
    // Si el registro no es exitoso, puedes mostrar un mensaje de error.
    // Esto es solo un ejemplo básico de cómo podría ser la lógica.
    this.router.navigateByUrl('home');
    // if (registroExitoso) {
    //   this.router.navigateByUrl('home');
    // } else {
    //   // Mostrar mensaje de error
    // }
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
    this.passwordFieldType = this.passwordHidden ? 'password' : 'text';
  }

  navigateToLogin() {
    this.router.navigateByUrl('login');
  }
}
