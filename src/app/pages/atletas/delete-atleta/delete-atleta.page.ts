import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AtletaService } from 'src/app/services/atleta.service';

@Component({
  selector: 'app-delete-atleta',
  templateUrl: './delete-atleta.page.html',
  styleUrls: ['./delete-atleta.page.scss'],
})
export class DeleteAtletaPage implements OnInit {
  atletaId!: number; // ID do atleta a ser excluído

  constructor(
    private modalCtrl: ModalController,
    private athleteService: AtletaService
  ) {}

  ngOnInit(): void {  }
  
  dismiss() {
    this.modalCtrl.dismiss();
  }

  async confirmDelete() {
    try{
      await this.athleteService.delete(this.atletaId).toPromise(); // Chama o serviço para excluir o atleta
      this.modalCtrl.dismiss({ confirm: true, atletaId: this.atletaId });
    } catch (error) {
      console.error('Erro ao excluir atleta:', error);
    }    
  }
}
