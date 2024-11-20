import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-excluir-atleta',
  templateUrl: './excluir-atleta.page.html',
  styleUrls: ['./excluir-atleta.page.scss'],
})
export class ExcluiratletaPage implements OnInit {
  atleta: any;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  confirmarExclusao() {
    console.log('Atleta excluído:', this.atleta);
    this.modalController.dismiss({ confirmado: true });
  }

  fecharModal() {
    this.modalController.dismiss();
  }
}
