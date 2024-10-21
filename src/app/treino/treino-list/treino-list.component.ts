import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {CadastroTreinoPage} from "../cadastro-treino/cadastro-treino.page";
import {ExcluirTreinoComponent} from "../excluir-treino/excluir-treino.component";
import { Treino } from "../../models/treino.models";


@Component({
  selector: 'app-treino-list',
  templateUrl: './treino-list.component.html',
  styleUrls: ['./treino-list.component.scss'],
})
export class TreinoListComponent  implements OnInit {
treinos: Treino[] = [
  {
    id: 1,
    local: 'Academia XYZ',
    horario: '08:00 - 09:00',
    data: '2024-10-18'
  },
  {
    id: 2,
    local: 'Parque Central',
    horario: '10:00 - 11:00',
    data: '2024-10-19'
  },
  {
    id: 3,
    local: 'Centro Esportivo',
    horario: '14:00 - 15:30',
    data: '2024-10-20'
  },
  {
    id: 4,
    local: 'Quadra Municipal',
    horario: '16:00 - 17:00',
    data: '2024-10-21'
  },
  {
    id: 5,
    local: 'Estádio Universitário',
    horario: '18:00 - 19:30',
    data: '2024-10-22'
  }
];

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async abrirModalCadastro() {
    const modal = await this.modalController.create({
      component: CadastroTreinoPage,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.treinos.push(result.data as Treino);
      }
    });

    return await modal.present();
  }

  async editarTreino(treino: Treino) {
    const modal = await this.modalController.create({
      component: CadastroTreinoPage,
      componentProps: { treino },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        const index = this.treinos.findIndex((a) => a.id === treino.id);
        if (index > -1) {
          this.treinos[index] = result.data as Treino;
        }
      }
    });

    return await modal.present();
  }

  async excluirTreino(treino: Treino) {
    const modal = await this.modalController.create({
      component: ExcluirTreinoComponent,
      componentProps: { treino },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.confirmado) {
        this.treinos = this.treinos.filter((a) => a.id !== treino.id);
        console.log('Treino excluído:', treino);
      }
    });

    return await modal.present();
  }

  protected readonly Treino = Treino;
}
