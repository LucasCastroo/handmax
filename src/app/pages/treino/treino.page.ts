import { Component, OnInit } from '@angular/core';
import { TreinoService } from '../../services/treino.service';
import { TreinoResponse } from '../../models/treino-response.model';
import { NewTreinoPage } from './new-treino/new-treino.page';
import { ModalController } from '@ionic/angular';
import { Treino } from '../../models/treino.model';
import { EditTreinoPage } from './edit-treino/edit-treino.page';

@Component({
  selector: 'app-treinos',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
})
export class TreinoPage implements OnInit {
  treinos: TreinoResponse[] = [];

  constructor(private treinoService: TreinoService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.carregarTreinos();
  }

  carregarTreinos() {
    this.treinoService.findAll().subscribe({
      next: (data) => {
        this.treinos = data;
      },
      error: (err) => {
        console.error('Erro ao carregar treinos:', err);
      },
    });
  }

  async abrirModalCadastro() {
    console.log('Abrir modal de cadastro de treino');
    const modal = await this.modalController.create({
      component: NewTreinoPage
    });

    modal.onDidDismiss().then(() => {
      this.carregarTreinos();
    });

    return await modal.present();
  }

  async editarTreino(treino: any, id: number) {
    console.log('Editar treino com id:', id);

    const modal = await this.modalController.create({      
      component: EditTreinoPage,
      componentProps: { treinoId: treino.id },
    });


    return await modal.present();
  }

  excluirTreino(id: number) {
    console.log('Excluir treino com o id:', id);
    // Implementar lógica para exclusão
  }
}
