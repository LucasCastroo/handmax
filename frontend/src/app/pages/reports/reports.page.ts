import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RelatorioSocialPage } from './relatorio-social/relatorio-social.page';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  reports: any[] = [
    { name: 'Relatório Social', component: RelatorioSocialPage },
    // Adicione outros relatórios conforme necessário
  ];

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openReportModal(component: any) {
    const modal = await this.modalController.create({
      component: component,
    });
    return await modal.present();
  }
}
