import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AtletaService } from 'src/app/services/atleta.service';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { ToastService } from 'src/app/services/toast.service';
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
    private treinoService: TreinoService,
    private errorHandlingService: ErrorHandlingService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {  }
  
  dismiss() {
    this.modalCtrl.dismiss();
  }

  // async confirmDelete() {
  //   try{
  //     await this.treinoService.delete(this.treinoId).toPromise(); // Chama o serviço para excluir o atleta
  //     this.modalCtrl.dismiss({ confirm: true, atletaId: this.treinoId });
  //   } catch (error) {
  //       const errorMessage = this.errorHandlingService.handleError(error);
  //       this.toastService.ativarToast(errorMessage);
  //   }    

    async confirmDelete() {
      this.treinoService.delete(this.treinoId).subscribe({
        next: () => {
          this.toastService.ativarToast('Treino deletado com sucesso!');
          this.dismiss();
        },
        error: (err) => {
          const errorMessage = this.errorHandlingService.handleError(err);
          this.toastService.ativarToast(errorMessage);
      }}
    );
  }

}
