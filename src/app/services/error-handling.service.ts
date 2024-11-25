import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
    /**
   * Processa o erro vindo do backend e retorna uma mensagem amigável.
   * @param error O erro recebido da API.
   * @returns Mensagem de erro legível.
   */
    handleError(error: HttpErrorResponse): string {
      // Verifica se há um corpo de erro detalhado (JSON)
      if (error.error) {
        if (typeof error.error === 'object') {
          // Caso seja um JSON, prioriza o campo `details`
          return error.error.details || 'Erro desconhecido no servidor.';
        } else {
          // Caso o erro seja uma string, retorna diretamente
          return error.error;
        }
      }
  
      // Para erros sem detalhes claros
      switch (error.status) {
        case 400:
          return 'Requisição inválida. Verifique os dados enviados.';
        case 401:
            return 'Você não está autorizado. Por favor, verifique permissões no sistema.';
        case 403:
          return 'Você não tem permissão para executar esta ação.';
        case 404:
          return 'Recurso não encontrado.';
        case 500:
          return 'Erro interno no servidor. Tente novamente mais tarde.';
        default:
          return 'Ocorreu um erro inesperado. Tente novamente.';
      }
    }    
}
