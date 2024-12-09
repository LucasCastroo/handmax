import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { SessionTokenService } from './session-token.service';
import {Usuario} from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/user';

  constructor(private httpClient: HttpClient,
              private sessionTokenService: SessionTokenService
  ) {}

  create(dto: Usuario): Observable<Usuario> {
    const headers = this.sessionTokenService.getSessionHeader();
    if(headers){
      return this.httpClient.post<Usuario>(this.baseUrl, dto, { headers });
    }else{
      return this.httpClient.post<Usuario>(this.baseUrl, dto);
    }
  }

  update(dto: Usuario, id: number): Observable<void> {
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

  findById(id: number): Observable<Usuario> {
    const headers = this.sessionTokenService.getSessionHeader();

    if(headers){
      return this.httpClient.get<Usuario>(`${this.baseUrl}/${id}`, { headers });
    }else{
      return this.httpClient.get<Usuario>(`${this.baseUrl}/${id}`);
    }
  }

}
