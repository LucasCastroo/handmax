import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AtletaCadastroInicial } from '../models/AtletaCadastroInicial';
import { Atleta } from '../models/atleta';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  private baseUrl = 'http://localhost:8080/atleta';

  constructor(private httpClient: HttpClient) {}

  createInitial(dto: AtletaCadastroInicial): Observable<Atleta> {
    return this.httpClient.patch<Atleta>(this.baseUrl, dto);
  }

  create(dto: Atleta): Observable<Atleta> {
    return this.httpClient.post<Atleta>(this.baseUrl, dto);
  }

  update(dto: Atleta, id: number): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/update/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  findById(id: number): Observable<Atleta> {
    return this.httpClient.get<Atleta>(`${this.baseUrl}/${id}`);
  }

  findByNome(nome: string): Observable<Atleta[]> {
    return this.httpClient.get<Atleta[]>(`${this.baseUrl}/nome/${nome}`);
  }

  findAll(): Observable<Atleta[]> {
    return this.httpClient.get<Atleta[]>(`${this.baseUrl}/all`);
  }
}
