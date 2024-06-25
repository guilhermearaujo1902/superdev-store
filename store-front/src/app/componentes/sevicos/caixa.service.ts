import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICaixa } from '../interfaces/ICaixa';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {

  private apiUrl = 'http://localhost:8080/caixa';

  constructor(private http: HttpClient) {}

  findAll(): Observable<ICaixa[]> {
    return this.http.get<ICaixa[]>(this.apiUrl);
  }

  findById(id:number): Observable<ICaixa> {
    return this.http.get<ICaixa>(`${this.apiUrl}/${id}`);
  }

  add(produto: ICaixa): Observable<ICaixa> {
    return this.http.post<ICaixa>(this.apiUrl, produto);
  }

  update(produto: ICaixa): Observable<ICaixa> {
    return this.http.put<ICaixa>(`${this.apiUrl}/${produto.id}`, produto);
  }

  delete(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
