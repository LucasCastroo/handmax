import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async onSubmit() {
    console.log('Atleta cadastrado:', this.atleta);
    await this.modalController.dismiss(this.atleta);
  }

  fecharModal() {
    this.modalController.dismiss();
  }
}
