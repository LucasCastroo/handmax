import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-view-treino',
  templateUrl: './view-treino.page.html',
  styleUrls: ['./view-treino.page.scss'],
})
export class ViewTreinoPage implements OnInit {
  treinoId!: number;
  treino: any;

  constructor(
    private route: ActivatedRoute,
    private treinoService: TreinoService,
    private modalController: ModalController,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.carregarTreino(this.treinoId);
  }

  carregarTreino(id: number) {
    this.treinoService.findById(id).subscribe({
      next: (res) => {
        this.treino = res;
      },
      error: (err) => {
        console.error('Erro ao carregar o treino:', err);
        this.toastService.ativarToast('Erro ao carregar treino! Por favor, contate o administrador do sistema');
      },
    });
  }

  fecharModal(){
    this.modalController.dismiss();
  }
}
