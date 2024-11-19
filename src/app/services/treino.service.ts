import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Treino} from "../models/treino.models";

@Injectable({
  providedIn: 'root'
})
export class TreinoService {
  private baseUrl = 'http://localhost:8080/treino';

  constructor(private httpClient: HttpClient) {}

  create(dto: Treino): Observable<Treino> {
    return this.httpClient.post<Treino>(this.baseUrl, dto);
  }

  update(dto: Treino, id: number): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/update/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  findById(id: number): Observable<Treino> {
    return this.httpClient.get<Treino>(`${this.baseUrl}/${id}`);
  }

  findAll(): Observable<Treino[]> {
    return this.httpClient.get<Treino[]>(`${this.baseUrl}/all`);
  }
}
