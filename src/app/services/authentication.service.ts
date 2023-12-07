import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Registrarse} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8081/api/usuarios';

  constructor(private httpClient: HttpClient) { }

  guardarUsuario(usuario: Registrarse): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}/guardar`, usuario);
  }

  iniciarSesion(correo: string, contrasena: string): Observable<any> {
    const requestBody = { correo, contrasena };
    return this.httpClient.post(`${this.baseUrl}/iniciar-sesion`, requestBody, { responseType: 'text' });
  }

  verPerfil(idUsuario: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/{idUsuario}`);
  }

}
