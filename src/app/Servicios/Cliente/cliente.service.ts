import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { vehiculo } from "../../Entidades/vehiculo";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class ClienteService {

  loginFrame: String;
  constructor(private http: Http) {
  }

  login(): Observable<any> {
    return this.http.get('https://sbapi.bancolombia.com/hackathon/v1/security/oauth-otp/oauth2/authorize?client_id=7f2d275e-9c1e-44fa-a738-20582d32f8ec&response_type=code&scope=Customer-detail:read:user&redirect_uri=http://localhost').map(Response => {
      this.loginFrame=Response.text();
      return Response.text();
    });
  }
}
