import { Component, OnInit } from '@angular/core';
import { AtletaService } from 'src/app/services/atleta.service';
import { NewAtletaPage } from './new-atleta/new-atleta.page';
import { ModalController } from '@ionic/angular';
import { EditTreinoPage } from '../treino/edit-treino/edit-treino.page';
import { EditAtletaPage } from './edit-atleta/edit-atleta.page';
import { DeleteAtletaPage } from './delete-atleta/delete-atleta.page';

@Component({
  selector: 'app-atletas',
  templateUrl: './atletas.page.html',
  styleUrls: ['./atletas.page.scss'],
})
export class AtletasPage implements OnInit {
  atletas: any[] = [];

  constructor(
    private athleteService: AtletaService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.carregarAtletas();
  }

  carregarAtletas(): void {
    this.athleteService.findAll().subscribe({
      next: (data) => (this.atletas = data),
      error: (err) => console.error('Erro ao carregar atletas:', err),
    });
  }

  async abrirModalCadastro(): Promise<void> {
    const modal = await this.modalController.create({
      component: NewAtletaPage,
    });

    modal.onDidDismiss().then(() => {
      this.carregarAtletas(); // Recarrega a lista após fechar o modal
    });

    await modal.present();
  }

  
  async editarTreino(atleta: any, id: number) {
    console.log('Editar treino com id:', id);

    const modal = await this.modalController.create({      
      component: EditAtletaPage,
      componentProps: { atletaId: id },
    });
    return await modal.present();
  }

  async deletarTreino(atletaId: number) {
    const modal = await this.modalController.create({
      component: DeleteAtletaPage,
      componentProps: { atletaId },
    });

    modal.onDidDismiss().then(() => {
      this.carregarAtletas(); // Recarrega a lista após fechar o modal
    });

    return await modal.present();
  }
}
