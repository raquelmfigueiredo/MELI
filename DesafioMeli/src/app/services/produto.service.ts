import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  
  getByIdProduto(id: number) {
    return this.http.get(
      `http://localhost:8080/produto/${id}`
    );
  }
  };


  