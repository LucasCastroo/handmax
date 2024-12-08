import { Component, OnInit } from '@angular/core';
import { TreinoService } from '../../services/treino.service';
import { TreinoResponse } from '../../models/treino-response.model';
import { NewTreinoPage } from './new-treino/new-treino.page';
import { ModalController } from '@ionic/angular';
import { Treino } from '../../models/treino.model';
import { EditTreinoPage } from './edit-treino/edit-treino.page';
import { DeleteTreinoPage } from './delete-treino/delete-treino.page';
import { ToastService } from 'src/app/services/toast.service';
import { ViewTreinoPage } from './view-treino/view-treino.page';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';

@Component({
  selector: 'app-treinos',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
})
export class TreinoPage implements OnInit {
  treinos: TreinoResponse[] = [];

  constructor(private treinoService: TreinoService,
    private modalController: ModalController, 
    private toastService: ToastService,
    private errorHandlingService: ErrorHandlingService
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
        const errorMessage = this.errorHandlingService.handleError(err);
        this.toastService.ativarToast(errorMessage);
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

  async excluirTreino(treinoId: number) {
    const modal = await this.modalController.create({
      component: DeleteTreinoPage,
      componentProps: { treinoId },
    });

    modal.onDidDismiss().then(() => {
      this.carregarTreinos(); // Recarrega a lista após fechar o modal
    });

    return await modal.present();
  }

  async verTreino(treino: any, id: number) {
    console.log('Ver treino com id:', treino);

    const modal = await this.modalController.create({      
      component: ViewTreinoPage,
      componentProps: { treinoId: treino.id },
    });

    return await modal.present();
  }
}
