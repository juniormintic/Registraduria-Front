import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  contrasenia: string = "";

  constructor(private miServicioSeguridad: SeguridadService, 
    private router: Router) { 

  }

  ngOnInit(): void {
  
  }

  login(): void {
    console.log("Correo: ", this.email, " Contraseña:", this.contrasenia)

    let infoUsuario: Usuario = {
      email: this.email,
      contrasenia: this.contrasenia
    }

    this.miServicioSeguridad.login(infoUsuario).subscribe(
      data => {
        this.miServicioSeguridad.guardarDatosSesion(data);
        this.router.navigate(['pages/candidato/listar']);
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Error Login',
          text: 'Correo o contraseña erroneos',
          footer: error["error"]["mensaje"]
        })
      }
    );
  }


}


