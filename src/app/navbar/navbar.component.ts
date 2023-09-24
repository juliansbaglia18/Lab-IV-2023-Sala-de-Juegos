import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { faDiceSix } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  public emailUser: any = 'No logueado';
  public fechaCreacionUser: any = 'No logueado';
  public nombreUser: any = 'undefinded';
  public datoUser: any = 'No logueado';
  
  constructor(
    private router: Router,
    private userService: UserService,
  ) {}


  ngOnInit(){
    // this.emailUser = this.userService.getInfoUsuarioLoggeado();
    this.obtenerUser();
  }

  obtenerUser(){
    this.userService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
      console.log(res?.metadata.creationTime);
      this.emailUser = res?.email;
      this.fechaCreacionUser = res?.metadata.creationTime;
      this.datoUser = res?.metadata.lastSignInTime;
      console.log(res);
    });
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
    this.userService.logOut();
    this.navigateToLogin();
  }


  
}
