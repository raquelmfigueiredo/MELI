import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  constructor(private http: HttpClient) {}

  
  getByIdProduto(id: number) {
    return this.http.get(
      `http://localhost:8080/status/${id}`
    );
  }
  };