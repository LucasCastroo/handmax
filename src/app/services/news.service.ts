import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicacaoDTO } from '../models/publicacao-dto.model';
import { SessionTokenService } from './session-token.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'http://localhost:8080/homepage';

  constructor(
    private httpClient: HttpClient,
    private sessionTokenService: SessionTokenService
  ) {}

  create(news: PublicacaoDTO): Observable<PublicacaoDTO> {
    const headers = this.sessionTokenService.getSessionHeader();
    if (headers) {
      return this.httpClient.post<PublicacaoDTO>(this.baseUrl, news, { headers });
    } else {
      return this.httpClient.post<PublicacaoDTO>(this.baseUrl, news);
    }
  }

  update(news: PublicacaoDTO, id: number): Observable<void> {
    const headers = this.sessionTokenService.getSessionHeader();
    if (headers) {
      return this.httpClient.put<void>(`${this.baseUrl}/${id}`, news, { headers });
    } else {
      return this.httpClient.put<void>(`${this.baseUrl}/${id}`, news);
    }
  }

  delete(id: number): Observable<void> {
    const headers = this.sessionTokenService.getSessionHeader();
    if (headers) {
      return this.httpClient.delete<void>(`${this.baseUrl}/${id}`, { headers });
    } else {
      return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }
  }

  findById(id: number): Observable<PublicacaoDTO> {
    const headers = this.sessionTokenService.getSessionHeader();
    if (headers) {
      return this.httpClient.get<PublicacaoDTO>(`${this.baseUrl}/${id}`, { headers });
    } else {
      return this.httpClient.get<PublicacaoDTO>(`${this.baseUrl}/${id}`);
    }
  }

  findAll(): Observable<PublicacaoDTO[]> {
    const headers = this.sessionTokenService.getSessionHeader();
    if (headers) {
      return this.httpClient.get<PublicacaoDTO[]>(this.baseUrl, { headers });
    } else {
      return this.httpClient.get<PublicacaoDTO[]>(this.baseUrl);
    }
  }
}
