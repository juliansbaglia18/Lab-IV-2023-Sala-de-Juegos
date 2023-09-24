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

    const {email, password} = this.user;

    this.userService.register(email, password).then(res=>{
      console.log("Registro", res);
      this.router.navigateByUrl('home');
    })
 
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
    this.passwordFieldType = this.passwordHidden ? 'password' : 'text';
  }

  navigateToLogin() {
    this.router.navigateByUrl('login');
  }
}
