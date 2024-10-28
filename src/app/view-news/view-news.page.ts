import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.page.html',
  styleUrls: ['./view-news.page.scss'],
})
export class ViewNewsPage implements OnInit {
  newsList: any[] = []; // Lista de notícias
  selectedNews: any = null; // Notícia selecionada para visualização

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['newsList']) {
      this.newsList = navigation.extras.state['newsList'];
    }
    if (navigation?.extras.state && navigation.extras.state['updatedNews']) {
      const updatedNews = navigation.extras.state['updatedNews'];
      const index = this.newsList.findIndex(news => news.title === updatedNews.title);
      if (index !== -1) {
        this.newsList[index] = updatedNews;
      }
    }
  }

  createNews() {
    this.router.navigate(['/noticias']);
  }

  viewNewsList() {
    this.selectedNews = null; // Retorna para a lista de notícias
  }

  selectNews(news: any) {
    this.selectedNews = news; // Exibe a notícia selecionada
  }

  editNews(newsItem: any) {
    this.router.navigate(['/edit-news'], { state: { newsItem } });
  }

  async confirmDelete(newsItem: any) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza de que deseja excluir esta notícia?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Excluir', role: 'confirm', handler: () => this.deleteNews(newsItem) }
      ]
    });
    await alert.present();
  }

  deleteNews(newsItem: any) {
    this.newsList = this.newsList.filter(item => item !== newsItem);
  }
}
