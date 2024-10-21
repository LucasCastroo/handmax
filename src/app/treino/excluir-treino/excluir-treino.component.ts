import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-excluir-treino',
  templateUrl: './excluir-treino.component.html',
  styleUrls: ['./excluir-treino.component.scss'],
})
export class ExcluirTreinoComponent  implements OnInit {
  treino: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  confirmarExclusao() {
    console.log('Treino excluído:', this.treino);
    this.modalController.dismiss({ confirmado: true });
  }

  fecharModal() {
    this.modalController.dismiss();
  }

}
