import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NewsService } from '../services/news.service'; // Ajuste o caminho conforme necessário
import { PublicacaoDTO } from '../models/news'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.page.html',
  styleUrls: ['./view-news.page.scss'],
})
export class ViewNewsPage implements OnInit {
  newsList: PublicacaoDTO[] = []; // Lista de notícias
  selectedNews: PublicacaoDTO | null = null; // Notícia selecionada para visualização

  constructor(
    private router: Router,
    private alertController: AlertController,
    private newsService: NewsService // Injetando o serviço de notícias
  ) {}

  ngOnInit() {
    this.loadNews(); // Carregar as notícias ao inicializar
  }

  loadNews() {
    this.newsService.getNews().subscribe((data) => {
      this.newsList = data; // Atribuindo as notícias recebidas à lista
    });
  }

  createNews() {
    this.router.navigate(['/noticias']);
  }

  viewNewsList() {
    this.selectedNews = null; // Retorna para a lista de notícias
  }

  selectNews(news: PublicacaoDTO) {
    this.selectedNews = news; // Exibe a notícia selecionada
  }

  editNews(newsItem: PublicacaoDTO) {
    this.router.navigate(['/edit-news'], { state: { newsItem } });
  }

  async confirmDelete(newsItem: any) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza de que deseja excluir esta notícia?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Excluir', role: 'confirm', handler: () => this.deleteNews(newsItem.id) } // Aqui
      ]
    });
    await alert.present();
  }
  
  deleteNews(id: number) { // Mudança na assinatura
    if (id) { // Verificando se o ID não é undefined
      this.newsList = this.newsList.filter(item => item.id !== id); // Use item.id para comparação
    }
  }
}   
