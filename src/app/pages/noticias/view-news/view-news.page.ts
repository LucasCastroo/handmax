import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NewsService } from '../../../services/news.service';
import { PublicacaoDTO } from '../../../models/publicacao-dto.model';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.page.html',
  styleUrls: ['./view-news.page.scss'],
})
export class ViewNewsPage implements OnInit {
  newsList: PublicacaoDTO[] = [];
  selectedNews: PublicacaoDTO | null = null;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.loadNews();
  }

  // Método para carregar todas as notícias
  loadNews() {
    this.newsService.findAll().subscribe(
      (data) => {
        console.log('Notícias carregadas:', data);
        this.newsList = data;
      },
      (error) => {
        console.error('Erro ao carregar notícias:', error);
      }
    );
  }

  // Método para criar uma nova notícia
  createNews() {
    this.router.navigate(['/noticias']);
  }

  // Método para visualizar a lista de notícias
  viewNewsList() {
    this.selectedNews = null;
  }

  // Método para selecionar uma notícia
  selectNews(news: PublicacaoDTO) {
    this.selectedNews = news;
  }

  // Método para editar uma notícia
  editNews(newsItem: PublicacaoDTO) {
    console.log('Notícia enviada para edição:', newsItem);
    if (newsItem.id) {
      this.router.navigate(['/edit-news'], { state: { newsItem } });
    } else {
      console.error('ID da notícia está ausente:', newsItem);
      alert('Erro: Não foi possível editar a notícia. O ID está ausente.');
    }
  }

  // Método para confirmar a exclusão de uma notícia
  async confirmDelete(newsItem: PublicacaoDTO) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza de que deseja excluir esta notícia?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Excluir',
          role: 'confirm',
          handler: () => this.deleteNews(newsItem.id),
        },
      ],
    });
    await alert.present();
  }

  // Método para excluir uma notícia
  deleteNews(id: number | undefined) {
    if (id !== undefined) {
      this.newsService.delete(id).subscribe(
        () => {
          this.newsList = this.newsList.filter((item) => item.id !== id);
          alert('Notícia excluída com sucesso!');
        },
        (error) => {
          console.error('Erro ao excluir a notícia:', error);
          alert('Erro ao excluir a notícia.');
        }
      );
    } else {
      console.error('Erro: ID não definido para exclusão.');
    }
  }
}
