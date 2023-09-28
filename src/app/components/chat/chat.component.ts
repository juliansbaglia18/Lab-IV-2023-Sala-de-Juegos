import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  nuevoMensaje: string = "";
  usuarioLogeado: any;
  mensajes: any = [
    {
      emisor: "id",
      texto: "Hola"
    },
    {
      emisor: "id",
      texto: "Chau"
    }
  ]
  constructor(private authservice:UserService) {

  }

  ngOnInit(): void {
    this.authservice.getUserLogged().subscribe(usuario=>{
      this.usuarioLogeado = usuario;
    });
  }

  enviarMensaje(){
    console.log(this.nuevoMensaje);
    let mensaje={
      emisor: this.usuarioLogeado.uid,
      texto: this.nuevoMensaje
    }
    this.mensajes.push(mensaje);
    this.nuevoMensaje="";

    setTimeout(() => {
      this.scrollToTheLastElementByClassName();
    }, 10);
  }

  scrollToTheLastElementByClassName(){
    let elements=document.getElementsByClassName('msj');
    let last:any=elements[elements.length-1];
    let topPos = last.offsetTop;

    //@ts-ignore
    //document.getElementById('contenedorMensajes')?.scrollTop=topPos;

    const contenedor = document.getElementById('contenedorMensajes');
    if (contenedor) {
      contenedor.scrollTop = topPos;
    }

  }
  
}
