import { Component, OnInit } from '@angular/core';
import { ClienteService } from './Servicios/Cliente/cliente.service';
import { Route, Router } from '@angular/router';


declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  frameLogin: String = '';
  errorMess: String = '';
  frameGen:String='';
  ini: String = '<h1>&nbsp</h1><h1>&nbsp</h1><h1>&nbsp</h1><h1>&nbsp</h1><h1>&nbsp</h1><div>';
  fin: String = '</div>';
  constructor(public serviciosCliente: ClienteService, public routes: Router) {
  }

  onLogin() {
    this.serviciosCliente.login().subscribe(
      result => {
        this.frameLogin = result
         this.frameGen= this.ini + result + this.fin
         console.log(this.frameGen);
        document.getElementById('frame').innerHTML=this.frameGen.toString()
      },
      error => {
        console.log(<any>error);
        this.errorMess = 'Algo malo ha sucedido';
      }
    )
    
  }
  ngOnInit() {
  }
}
