import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Treino} from "../models/treino.model";
import {TreinoResponse} from "../models/treino-response.model";
import { TreinoFullResponse } from '../models/treino-full-response';

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
    return this.httpClient.put<void>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  findById(id: number): Observable<TreinoFullResponse> {
    return this.httpClient.get<TreinoFullResponse>(`${this.baseUrl}/${id}`);
  }

  findAll(): Observable<TreinoResponse[]> {
    return this.httpClient.get<TreinoResponse[]>(`${this.baseUrl}`);
  }
}
