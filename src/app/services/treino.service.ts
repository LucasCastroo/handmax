import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Treino} from "../models/treino.model";
import {TreinoResponse} from "../models/treino-response.model";
import { TreinoFullResponse } from '../models/treino-full-response.model';
import { SessionTokenService } from './session-token.service';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {
  private baseUrl = 'http://localhost:8080/treino';

  constructor(private httpClient: HttpClient,
              private sessionTokenService: SessionTokenService
  ) {}

  create(dto: Treino): Observable<Treino> {
    const headers = this.sessionTokenService.getSessionHeader();
    if(headers){
      return this.httpClient.post<Treino>(this.baseUrl, dto, { headers });
    }else{
      return this.httpClient.post<Treino>(this.baseUrl, dto);
    }
  }

  update(dto: Treino, id: number): Observable<void> {
    const headers = this.sessionTokenService.getSessionHeader();

    if(headers){
      return this.httpClient.put<void>(`${this.baseUrl}/${id}`, dto, { headers });
    }else{
      return this.httpClient.put<void>(`${this.baseUrl}/${id}`, dto);
    }
  }

  delete(id: number): Observable<void> {
    const headers = this.sessionTokenService.getSessionHeader();
    
    if(headers){
      return this.httpClient.delete<void>(`${this.baseUrl}/${id}`, { headers });
    }else{
      return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }
  }

  findById(id: number): Observable<TreinoFullResponse> {
    const headers = this.sessionTokenService.getSessionHeader();
    
    if(headers){
      return this.httpClient.get<TreinoFullResponse>(`${this.baseUrl}/${id}`, { headers });
    }else{
      return this.httpClient.get<TreinoFullResponse>(`${this.baseUrl}/${id}`);
    }
  }

  findAll(): Observable<TreinoResponse[]> {
    const headers = this.sessionTokenService.getSessionHeader();

    if(headers){
      return this.httpClient.get<TreinoResponse[]>(`${this.baseUrl}`, { headers });
    }else{
      return this.httpClient.get<TreinoResponse[]>(`${this.baseUrl}`);
    }
  }

  findNextThree(): Observable<TreinoResponse[]> {
    const headers = this.sessionTokenService.getSessionHeader();

    if(headers){
      return this.httpClient.get<TreinoResponse[]>(`${this.baseUrl}/next-3`, { headers });
    }else{
      return this.httpClient.get<TreinoResponse[]>(`${this.baseUrl}/next-3`);
    }
  }

}
