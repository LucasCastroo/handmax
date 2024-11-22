import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacaoDTO } from 'src/app/models/publicacao-dto.model';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.page.html',
  styleUrls: ['./edit-news.page.scss'],
})
export class EditNewsPage implements OnInit {
  news: PublicacaoDTO = {
    titulo: '',
    conteudo: '',
    nomeImagem: '',
    dataPublicacao: new Date(),
  };
  
  isTitleVisible: boolean = false;

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['newsItem']) {
      this.news = { ...navigation.extras.state['newsItem'] };
    }
  }

  addTitle() {
    this.isTitleVisible = true;
  }

  removeTitle() {
    this.news.titulo = '';
    this.isTitleVisible = false;
  }

  addImage() {
    this.news.nomeImagem = '';
  }

  removeImage() {
    this.news.nomeImagem = '';
  }

  addParagraph() {
    this.news.conteudo = '';
  }

  removeParagraph() {
    this.news.conteudo = '';
  }

  saveNews() {
    if (this.news.titulo || this.news.nomeImagem || this.news.conteudo) {
      this.newsService.createNews(this.news).subscribe(() => {
        this.router.navigate(['/view-news']);
      });
    } else {
      alert("Por favor, adicione um título, imagem ou parágrafo antes de salvar.");
    }
  }

  previewNews() {
    this.router.navigate(['/view-news'], { state: { newsItem: this.news } });
  }
}
