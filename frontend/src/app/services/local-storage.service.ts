import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Obtém um item do localStorage e tenta parseá-lo como JSON
  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Erro ao parsear item do localStorage (chave: ${key}):`, error);
      return null;
    }
  }

  // Salva um item no localStorage, convertendo-o em string
  setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Erro ao salvar item no localStorage (chave: ${key}):`, error);
    }
  }

  // Remove um item do localStorage
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Erro ao remover item do localStorage (chave: ${key}):`, error);
    }
  }
}
