import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AtletaService } from 'src/app/services/atleta.service';

@Component({
  selector: 'app-view-atleta',
  templateUrl: './view-atleta.page.html',
  styleUrls: ['./view-atleta.page.scss'],
})
export class ViewAtletaPage implements OnInit {
  atletaId!: number;
  atleta: any;

  constructor(
    private route: ActivatedRoute,
    private atletasService: AtletaService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.carregarAtleta(this.atletaId);
  }

  carregarAtleta(id: number) {
    this.atletasService.findById(id).subscribe({
      next: (res) => {
        this.atleta = res;
      },
      error: (err) => {
        console.error('Erro ao carregar o atleta:', err);
      },
    });
  }

  fecharModal(){
    this.modalController.dismiss();
  }
}
