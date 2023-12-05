import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Libros} from "../models/Libros";
import {LibroLista} from "../models/LibroLista";

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private apiUrl = 'http://localhost:8080/api/libros'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  buscarLibroPorIsbn(isbn: string): Observable<any> {
    const url = `${this.apiUrl}/buscarPorIsbn/${isbn}`;
    return this.http.get(url);
  }

  agregarLibro(libro: Libros): Observable<any> {
    const url = `${this.apiUrl}/agregar`;
    return this.http.post(url, libro);
  }

  listarLibrosDisponibles(): Observable<LibroLista[]> {
    const url = `${this.apiUrl}/disponibles`;
    return this.http.get<LibroLista[]>(url);
  }
}
