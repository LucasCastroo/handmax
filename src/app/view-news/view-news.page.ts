import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.page.html',
  styleUrls: ['./view-news.page.scss'],
})
export class ViewNewsPage implements OnInit {
  newsList: any[] = []; // Lista de notícias

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['newsList']) {
      this.newsList = navigation.extras.state['newsList'];
    }

    // Verifica se há uma notícia atualizada (caso venha da página de edição)
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

  viewNews() {
    this.router.navigate(['/view-news']);
  }

  // Editar a notícia selecionada
  editNews(newsItem: any) {
    this.router.navigate(['/edit-news'], { state: { newsItem } });
  }

  // Excluir a notícia
  deleteNews(newsItem: any) {
    this.newsList = this.newsList.filter(item => item !== newsItem);
  }
}
