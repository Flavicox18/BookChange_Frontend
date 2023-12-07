import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntercambioService {

  private apiUrl = 'http://localhost:8080/api/intercambios';

  constructor(private http: HttpClient) { }


  addIntercambio(intercambio: any): Observable<any> {
    return this.http.post(this.apiUrl, intercambio);
  }


}
