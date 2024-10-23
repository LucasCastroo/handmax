import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss'],
})
export class EditNewsPage implements OnInit {
  newsItem: any = {}; // Objeto para armazenar a notícia a ser editada

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['newsItem']) {
      this.newsItem = { ...navigation.extras.state['newsItem'] }; // Clona os dados para edição
    }
  }

  // Atualiza e navega de volta para a visualização das notícias
  updateNews() {
    this.router.navigate(['/view-news'], { state: { updatedNews: this.newsItem } });
  }
}
