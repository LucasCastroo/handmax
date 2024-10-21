import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.page.html',
  styleUrls: ['./view-news.page.scss'],
})
export class ViewNewsPage implements OnInit {
  newsList: any[] = []; // Array para armazenar a lista de notícias

  constructor(private router: Router) {}

  ngOnInit() {
    // Captura a lista de notícias passada na navegação
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['newsList']) {
      this.newsList = navigation.extras.state['newsList']; // Atribui a lista de notícias
    }
  }

  editNews(newsItem: any) {
    // Navegar para a página de edição de notícias com a notícia selecionada
    this.router.navigate(['/edit-news'], { state: { newsItem } });
  }
}
