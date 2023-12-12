import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private baseUrl = 'http://localhost:8080/api/usuarios';

  constructor(private httpClient: HttpClient) { }

  obtenerPerfil(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseUrl}/ver-perfil/${id}`);
  }
}
