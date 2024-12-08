import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionTokenService } from './session-token.service';

@Injectable({
  providedIn: 'root',
})
export class FrequenciaService {
  private apiUrl = 'http://localhost:8080/frequencia';

  constructor(private http: HttpClient,
              private sessionTokenService: SessionTokenService
  ) {}

  listarAlunosNoTreino(treinoId: number): Observable<any[]> {
    const headers = this.sessionTokenService.getSessionHeader();
    if(headers){
      return this.http.get<any[]>(`${this.apiUrl}/treino/${treinoId}/atletas`, { headers });
    }else{
      return this.http.get<any[]>(`${this.apiUrl}/treino/${treinoId}/atletas`);
    }
  }

  salvarFrequencia(frequencia: any[]): Observable<any> {
    const headers = this.sessionTokenService.getSessionHeader();
    if(headers){
      return this.http.post(`${this.apiUrl}/registrar-multiplas`, frequencia, { headers });
    }else{
      return this.http.post(`${this.apiUrl}/registrar-multiplas`, frequencia);
    }
  }
}
