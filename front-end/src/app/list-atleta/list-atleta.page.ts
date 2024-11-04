import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CadastroAtletaPage } from '../cadastro-atleta/cadastro-atleta.page';
import { EditarAtletaPage } from '../edit-atleta/edit-atleta.page';
import { ExcluiratletaPage } from '../excluir-atleta/excluir-atleta.page';

interface Atleta {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  categoria: string;
  quantFalta: number | null;
  quantTreinos: number | null;
}

@Component({
  selector: 'app-listatleta',
  templateUrl: './list-atleta.page.html',
  styleUrls: ['./list-atleta.page.scss'],
})
export class ListatletaPage implements OnInit {
  atletas: Atleta[] = [];

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async abrirModalCadastro() {
    const modal = await this.modalController.create({
      component: CadastroAtletaPage,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.atletas.push(result.data as Atleta);
      }
    });

    return await modal.present();
  }

  async editarAtleta(atleta: Atleta) {
    const modal = await this.modalController.create({
      component: EditarAtletaPage,
      componentProps: { atleta },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        const index = this.atletas.findIndex((a) => a.id === atleta.id);
        if (index > -1) {
          this.atletas[index] = result.data as Atleta;
        }
      }
    });

    return await modal.present();
  }

  async excluirAtleta(atleta: Atleta) {
    const modal = await this.modalController.create({
      component: ExcluiratletaPage,
      componentProps: { atleta },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.confirmado) {
        this.atletas = this.atletas.filter((a) => a.id !== atleta.id);
        console.log('Atleta excluído:', atleta);
      }
    });

    return await modal.present();
  }
}
