import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AtletaService } from 'src/app/services/atleta.service';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-delete-atleta',
  templateUrl: './delete-atleta.page.html',
  styleUrls: ['./delete-atleta.page.scss'],
})
export class DeleteAtletaPage implements OnInit {
  atletaId!: number; // ID do atleta a ser excluído

  constructor(
    private modalCtrl: ModalController,
    private athleteService: AtletaService,
    private toastService: ToastService,
    private errorHandlingService: ErrorHandlingService
  ) {}

  ngOnInit(): void {  }
  
  dismiss() {
    this.modalCtrl.dismiss();
  }

  async confirmDelete() {
    this.athleteService.delete(this.atletaId).subscribe({
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
