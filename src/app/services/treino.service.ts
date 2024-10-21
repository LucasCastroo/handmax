import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  constructor() { }

  findById(id: string){ return {
    id: 1,
    local: 'Academia XYZ',
    horario: '08:00 - 09:00',
    data: '2024-10-18'
  }}
}
