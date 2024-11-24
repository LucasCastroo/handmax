import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicacaoDTO } from '../models/publicacao-dto.model';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:8080/homepage'; 

  constructor(private http: HttpClient) {}

  // Método para obter todas as notícias com paginação
  getNews(page: number = 0, pageSize: number = 100): Observable<PublicacaoDTO[]> {
    const params = { page: page.toString(), pageSize: pageSize.toString() };
    return this.http.get<PublicacaoDTO[]>(this.apiUrl, { params });
  }

  // Método para obter uma única notícia por ID
  getNewsById(id: number): Observable<PublicacaoDTO> {
    return this.http.get<PublicacaoDTO>(`${this.apiUrl}/${id}`);
  }

  // Método para criar uma nova notícia
  createNews(news: PublicacaoDTO): Observable<PublicacaoDTO> {
    return this.http.post<PublicacaoDTO>(this.apiUrl, news);
  }

  // Método para atualizar uma notícia existente
  updateNews(id: number, news: PublicacaoDTO): Observable<PublicacaoDTO> {
    return this.http.put<PublicacaoDTO>(`${this.apiUrl}/${id}`, news);
  }

  // Método para excluir uma notícia
  deleteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método para fazer upload de imagem
  uploadImage(id: number, formData: FormData): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/upload/imagem/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  // Método para fazer download de imagem
  downloadImage(nomeImagem: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/imagem/${nomeImagem}`, { responseType: 'blob' });
  }
}
