import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from '../interfaces/IProduto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'http://localhost:8080/produto';

  constructor(private http: HttpClient) { }

  findAll(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.apiUrl);
  }

  findById(id:number): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.apiUrl}/${id}`);
  }

  add(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(this.apiUrl, produto);
  }

  update(produto: IProduto): Observable<IProduto> {
    return this.http.put<IProduto>(`${this.apiUrl}/${produto.id}`, produto);
  }

  delete(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
