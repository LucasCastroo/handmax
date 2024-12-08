import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SessionTokenService {
  private baseUrl = 'http://localhost:8080/auth'; // URL base da API
  private usuarioLogadoKey = 'usuarioLogado';
  private sessionTokenKey = 'sessionToken';

  // Subjects para controle de estado
  private usuarioLogadoSubject = new BehaviorSubject<Usuario | null>(null);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasValidSessionToken());

  usuarioLogado$ = this.usuarioLogadoSubject.asObservable();
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    // Restaurar estado inicial do usuário logado ao carregar o serviço
    const usuarioLogado = this.localStorageService.getItem<Usuario>(this.usuarioLogadoKey);
    if (usuarioLogado) {
      this.usuarioLogadoSubject.next(usuarioLogado);
    }
  }

  // Salva o token de sessão no localStorage
  saveSessionToken(token: string): void {
    this.localStorageService.setItem(this.sessionTokenKey, token);
    this.isAuthenticatedSubject.next(true); // Atualiza o estado de autenticação
  }

  // Obtém o token de sessão do localStorage
  getSessionToken(): string | null {
    return this.localStorageService.getItem<string>(this.sessionTokenKey);
  }

  // Remove o token de sessão do localStorage
  clearSessionToken(): void {
    this.localStorageService.removeItem(this.sessionTokenKey);
    this.isAuthenticatedSubject.next(false); // Atualiza o estado de autenticação
  }

  // Salva o usuário logado no localStorage
  setUsuarioLogado(usuario: Usuario): void {
    console.log('Salvando usuário:', usuario);
    this.localStorageService.setItem(this.usuarioLogadoKey, usuario);
    this.usuarioLogadoSubject.next(usuario); // Atualiza o Subject
  }

  // Obtém o estado do usuário logado como um Observable
  getUsuarioLogado(): Observable<Usuario | null> {
    return this.usuarioLogadoSubject.asObservable();
  }

  // Remove o usuário logado do localStorage
  removeUsuarioLogado(): void {
    this.localStorageService.removeItem(this.usuarioLogadoKey);
    this.usuarioLogadoSubject.next(null);
    this.clearSessionToken();
  }

  // Verifica se existe um token de sessão válido
  hasValidSessionToken(): boolean {
    const sessionToken = this.getSessionToken();
    return !!sessionToken; // Verifique se o token está presente
  }

  // Adiciona o token ao cabeçalho para requisições
  getSessionHeader(): HttpHeaders | null {
    const token = this.getSessionToken();
    return token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : null;
  }

  // Método para autenticar o usuário via API
  authenticateUser(username: string, password: string): Observable<any> {
    const loginUrl = `${this.baseUrl}/login`;
    const params = { login: username, senha: password };
  
    return this.httpClient.post(loginUrl, params, { observe: 'response' }).pipe(
      tap((res: any) => {
        console.log(res);
        const authToken = res.headers.get('authorization') ?? ''; 
        if (authToken) {
          this.saveSessionToken(authToken);
          const usuarioLogado = res.body;
          if (usuarioLogado) {
            this.setUsuarioLogado(usuarioLogado);
            this.usuarioLogadoSubject.next(usuarioLogado);
          }
        }
      })
    );
  }
}
