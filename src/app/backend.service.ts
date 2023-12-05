import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  guardarUsuario(usuarioData: any): Observable<Object> {
    const url = `${this.baseUrl}/usuarios/guardar`;
    return this.httpClient.post(url, usuarioData);
  }

  iniciarSesion(correo: string, contrasena: string): Observable<any> {
    const url = `${this.baseUrl}/usuarios/iniciar-sesion`;
    const body = { correo, contrasena };
    return this.httpClient.post(url, body);
  }
}
