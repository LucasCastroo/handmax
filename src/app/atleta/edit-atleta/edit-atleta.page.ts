import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-atleta',
  templateUrl: './edit-atleta.page.html',
  styleUrls: ['./edit-atleta.page.scss'],
})
export class EditarAtletaPage implements OnInit {
  atleta = {
    id: null,
    nome: '',
    cpf: '',
    dataNascimento: '',
    sexo: '',
    telefone: '',
    endereco: '',
  };

  sexos = ['Masculino', 'Feminino', 'Outro'];

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async onSubmit() {
    console.log('Atleta editado:', this.atleta);
    await this.modalController.dismiss(this.atleta);
  }

  fecharModal() {
    this.modalController.dismiss();
  }
}
