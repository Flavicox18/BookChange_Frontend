import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";
import {Usuario} from "../models/perfil";

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicio{

  private baseUrl = 'http://localhost:8080/usuarios';
  constructor(private http:HttpClient) {}

  getUser(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseUrl}/`+id).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }
}
