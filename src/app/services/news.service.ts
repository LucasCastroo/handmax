import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicacaoDTO } from '../models/publicacao-dto.model';
import { SessionTokenService } from './session-token.service';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:8080/homepage'; 

  constructor(private http: HttpClient,
  ) {}

  
  getNews(page: number = 0, pageSize: number = 100): Observable<PublicacaoDTO[]> {
    const params = { page: page.toString(), pageSize: pageSize.toString() };
    return this.http.get<PublicacaoDTO[]>(this.apiUrl, { params });
  }

  // Método para obter uma única notícia por ID
  getNewsById(id: string): Observable<PublicacaoDTO> {
    return this.http.get<PublicacaoDTO>(`${this.apiUrl}/${id}`);
  }

  // Método para criar uma nova notícia
  createNews(news: PublicacaoDTO): Observable<PublicacaoDTO> {
    return this.http.post<PublicacaoDTO>(this.apiUrl, news);
  }

  // Método para atualizar uma notícia existente
  updateNews(id: string, news: PublicacaoDTO): Observable<PublicacaoDTO> {
    return this.http.put<PublicacaoDTO>(`${this.apiUrl}/${id}`, news);
  }

  // Método para excluir uma notícia
  deleteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método para fazer upload de imagem
  uploadImage(id: string, formData: FormData): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/upload/imagem/${id}`, formData);
  }

  uploadImages(formData: FormData): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/upload/imagem`, formData);
  }

  // Método para fazer download de imagem
  downloadImage(nomeImagem: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/imagem/${nomeImagem}`, { responseType: 'blob' });
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
