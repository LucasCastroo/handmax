/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:8080/publicacao'; 

  constructor(private http: HttpClient) {}

  // Método para obter todas as notícias
  getNews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para criar uma nova notícia
  createNews(news: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, news);
  }

  // Método para atualizar uma notícia existente
  updateNews(id: string, news: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, news);
  }

  // Método para excluir uma notícia
  deleteNews(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
*/ 