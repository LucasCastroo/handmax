import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AtletaService } from 'src/app/services/atleta.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-delete-treino',
  templateUrl: './delete-treino.page.html',
  styleUrls: ['./delete-treino.page.scss'],
})
export class DeleteTreinoPage implements OnInit {
  treinoId!: number; // ID do atleta a ser excluído

  constructor(
    private modalCtrl: ModalController,
    private treinoService: TreinoService
  ) {}

  ngOnInit(): void {  }
  
  dismiss() {
    this.modalCtrl.dismiss();
  }

  async confirmDelete() {
    try{
      await this.treinoService.delete(this.treinoId).toPromise(); // Chama o serviço para excluir o atleta
      this.modalCtrl.dismiss({ confirm: true, atletaId: this.treinoId });
    } catch (error) {
      console.error('Erro ao excluir atleta:', error);
    }    
  }

}
