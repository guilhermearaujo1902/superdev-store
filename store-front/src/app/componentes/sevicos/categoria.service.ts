import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoria } from '../interfaces/ICategoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:8080/categoria';

  constructor(private http: HttpClient) {}

  findAll(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(this.apiUrl);
  }

  findById(id:number): Observable<ICategoria> {
    return this.http.get<ICategoria>(`${this.apiUrl}/${id}`);
  }

  add(produto: ICategoria): Observable<ICategoria> {
    return this.http.post<ICategoria>(this.apiUrl, produto);
  }

  update(produto: ICategoria): Observable<ICategoria> {
    return this.http.put<ICategoria>(`${this.apiUrl}/${produto.id}`, produto);
  }

  delete(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
