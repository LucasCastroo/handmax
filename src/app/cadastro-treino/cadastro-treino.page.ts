import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-treino',
  templateUrl: './cadastro-treino.page.html',
  styleUrls: ['./cadastro-treino.page.scss'],
})
export class CadastroTreinoPage implements OnInit {
  treino = {
    id: null,
    local: '',
    horario: '',
    data: '',
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('Treino cadastrado:', this.treino);
  }
}
