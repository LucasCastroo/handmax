import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-atleta',
  templateUrl: './cadastro-atleta.page.html',
  styleUrls: ['./cadastro-atleta.page.scss'],
})
export class CadastroAtletaPage implements OnInit {
  atleta = {
    id: null,
    nome: '',
    cpf: '',
    dataNascimento: '',
    categoria: '',
    quantFalta: null,
    quantTreinos: null,
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('Atleta cadastrado:', this.atleta);
  }
}
