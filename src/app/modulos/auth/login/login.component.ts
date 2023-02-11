import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interface/login';
import { RespuestaApi } from 'src/app/interface/respuestaapi';
import { AuthServicio } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login: Login = { Correo: 'jcloaiza', Clave: '1212' }

  constructor(private _servicio: AuthServicio, private _router: Router) {

  }

  onIngresar() {


    this._servicio
      .Login(this.login)
      .subscribe((respuesta: RespuestaApi) => {
        console.log(respuesta);
      }).add(() => {

      });

    //this._router.navigate(['/registro']);
  }
}
