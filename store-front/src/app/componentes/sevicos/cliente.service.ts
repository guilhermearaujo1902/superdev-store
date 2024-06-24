import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from '../interfaces/ICliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8080/cliente';

  constructor(private http: HttpClient) { }

  findAll(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(this.apiUrl);
  }

  findById(id:number): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.apiUrl}/${id}`);
  }

  add(produto: ICliente): Observable<ICliente> {
    return this.http.post<ICliente>(this.apiUrl, produto);
  }

  update(produto: ICliente): Observable<ICliente> {
    return this.http.put<ICliente>(`${this.apiUrl}/${produto.id}`, produto);
  }

  delete(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
