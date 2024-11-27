import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { NewsService } from 'src/app/services/news.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  noticias: any[] = [];

  constructor(
    private noticiasService: NewsService,
    private modalController: ModalController,
    private errorHandlingService: ErrorHandlingService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.carregarNoticias();
  }

  carregarNoticias(): void {
    this.noticiasService.getNews(0, 100).subscribe({
      next: (data) => (this.noticias = data),
      error: (err) => {
        console.error('Erro ao carregar notícias:', err);
        const errorMessage = this.errorHandlingService.handleError(err);
        this.toastService.ativarToast(errorMessage);
      }
    });
  }
}
