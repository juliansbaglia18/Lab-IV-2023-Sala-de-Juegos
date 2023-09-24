import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = { email: ''  , password: '' };
  passwordHidden = true;
  passwordFieldType = 'password';
  mostrarPassword = false;
  

  constructor(private router: Router, private userService: UserService) {}

  login() {

    const {email, password} = this.user;

    console.log(this.user.email + this.user.password);

    this.userService.login(email, password).then(res=>{
      console.log("Login", res);
      this.router.navigateByUrl('home');

    })

    // // // this.userService.login(this.user)
    // // //   .then(() => {
    // // //     // Si está registrado, va al Home.
    // // //     this.router.navigateByUrl('home');
    // // //   })
    // // //   .catch((error) => {
    // // //     // Mensaje de error. (MODIFICAR)
    // // //     console.error('Error al iniciar sesión:', error);
    // // //   });
  }
  loginConGoogle() {

    this.userService.loginWithGoogle().then(res=>{
      console.log("Login con Google", res);
      this.router.navigateByUrl('home');

    })
  }

  accesoRapido (){
    this.user.email = "julian@mail.com";
    this.user.password = "123456";
  }
  accesoRapido2 (){
    this.user.email = "prueba@mail.com";
    this.user.password = "123123";
  }
  

  togglePasswordVisibility() {
  this.passwordHidden = !this.passwordHidden;
  this.passwordFieldType = this.passwordHidden ? 'password' : 'text';
   }

  navigateToRegistration() {
    this.router.navigateByUrl('registro');
  }

}
