import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NewsService } from '../../services/news.service';
import { PublicacaoDTO } from '../../models/news';

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

  loadNews() {
    this.newsService.getNews().subscribe((data) => {
      this.newsList = data;
    });
  }

  createNews() {
    this.router.navigate(['/noticias']);
  }

  viewNewsList() {
    this.selectedNews = null;
  }

  selectNews(news: PublicacaoDTO) {
    this.selectedNews = news;
  }

  editNews(newsItem: PublicacaoDTO) {
    this.router.navigate(['/edit-news'], { state: { newsItem } });
  }

  async confirmDelete(newsItem: PublicacaoDTO) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza de que deseja excluir esta notícia?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Excluir', role: 'confirm', handler: () => this.deleteNews(newsItem.id) }
      ]
    });
    await alert.present();
  }

  deleteNews(id: number | undefined) {
    if (id) {
      this.newsService.deleteNews(id.toString()).subscribe(() => {
        this.newsList = this.newsList.filter(item => item.id !== id);
      });
    }
  }
}
