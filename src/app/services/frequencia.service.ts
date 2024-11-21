import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FrequenciaService {
  private apiUrl = 'http://localhost:8080/frequencia';

  constructor(private http: HttpClient) {}

  listarAlunosNoTreino(treinoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/treino/${treinoId}/atletas`);
  }

  salvarFrequencia(frequencia: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar-multiplas`, frequencia);
  }
}
