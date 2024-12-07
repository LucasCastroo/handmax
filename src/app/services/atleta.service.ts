import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AtletaCadastroInicial } from '../models/atleta-cadastro-inicial.model';
import { Atleta } from '../models/atleta.model';
import { AtletaTreinoDTO } from '../models/atleta-treino-dtomodel';
import { SessionTokenService } from './session-token.service';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  private baseUrl = 'http://localhost:8080/atleta';

  constructor(private httpClient: HttpClient,
              private sessionTokenService: SessionTokenService
  ) {}

  createInitial(dto: AtletaCadastroInicial): Observable<Atleta> {
    const headers = this.sessionTokenService.getSessionHeader();
    if(headers){
      return this.httpClient.post<Atleta>(`${this.baseUrl}/initial`, dto, { headers });
    }else{
      return this.httpClient.post<Atleta>(`${this.baseUrl}/initial`, dto);
    }
  }

  createInitialWithTreino(dto: AtletaCadastroInicial, id: number): Observable<Atleta>{
    const headers = this.sessionTokenService.getSessionHeader();
    if(headers){
      return this.httpClient.post<Atleta>(`${this.baseUrl}/initial/${id}`, dto, { headers });
    }else{
      return this.httpClient.post<Atleta>(`${this.baseUrl}/initial/${id}`, dto);
    }
  }

  create(dto: Atleta): Observable<Atleta> {
    const headers = this.sessionTokenService.getSessionHeader();

    if(headers){
      return this.httpClient.post<Atleta>(this.baseUrl, dto, { headers });
    }else{
      return this.httpClient.post<Atleta>(this.baseUrl, dto);
    }
  }

  update(dto: Atleta, id: number): Observable<void> {
    const headers = this.sessionTokenService.getSessionHeader();

    if(headers){
      return this.httpClient.put<void>(`${this.baseUrl}/update/${id}`, dto, { headers });
    }else{
      return this.httpClient.put<void>(`${this.baseUrl}/update/${id}`, dto);
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

  findById(id: number): Observable<Atleta> {
    const headers = this.sessionTokenService.getSessionHeader();

    if(headers){
      return this.httpClient.get<Atleta>(`${this.baseUrl}/${id}`, { headers });
    }else{
      return this.httpClient.get<Atleta>(`${this.baseUrl}/${id}`);
    }
  }

  findByNome(nome: string): Observable<Atleta[]> {
    const headers = this.sessionTokenService.getSessionHeader();
    if(headers){
      return this.httpClient.get<Atleta[]>(`${this.baseUrl}/nome/${nome}`, { headers });
    }else{
      return this.httpClient.get<Atleta[]>(`${this.baseUrl}/nome/${nome}`);
    }
  }

  findAll(): Observable<Atleta[]> {
    const headers = this.sessionTokenService.getSessionHeader();
    if(headers){
      return this.httpClient.get<Atleta[]>(`${this.baseUrl}/all`, { headers });
    }else{
      return this.httpClient.get<Atleta[]>(`${this.baseUrl}/all`);
    }
  }

  findAllForTreinos(): Observable<AtletaTreinoDTO[]> {
    const headers = this.sessionTokenService.getSessionHeader();

    if(headers){
      return this.httpClient.get<AtletaTreinoDTO[]>(`${this.baseUrl}/all/treinos`, { headers });
    }else{
      return this.httpClient.get<AtletaTreinoDTO[]>(`${this.baseUrl}/all/treinos`);
    }
  }

  validarToken(token: string): Observable<boolean>{
    return this.httpClient.get<boolean>(`${this.baseUrl}/validar-token/${token}`);
  }

  updateCadastroInicial(token: string, dados: Atleta){
    return this.httpClient.put<Atleta>(`${this.baseUrl}/token/${token}`, dados);
  }

  getCategorias(): Observable<any[]> {
    const url = 'http://localhost:8080/enum/categorias';
    return this.httpClient.get<any[]>(url);
  }

  getTimeNotificacao(): Observable<any[]> {
    const url = 'http://localhost:8080/enum/frequencia-notificacao';
    return this.httpClient.get<any[]>(url);
  }
}
