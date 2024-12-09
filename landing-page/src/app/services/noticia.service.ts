import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Noticia} from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private readonly API_URL = 'http://localhost:8080/noticias';

  constructor(private http: HttpClient) {}

  getNoticias(page: number = 0, pageSize: number = 100): Observable<Noticia[]> {
    const params = { page: page.toString(), pageSize: pageSize.toString() };
    return this.http.get<Noticia[]>(this.API_URL, { params });
  }
}
