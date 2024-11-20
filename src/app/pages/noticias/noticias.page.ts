import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacaoDTO } from '../../models/publicacao-dto.model';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss']
})
export class NoticiasPage implements OnInit {
  news: PublicacaoDTO = {
    titulo: '',
    conteudo: '',
    nomeImagem: '',
    dataPublicacao: new Date(),
  };

  savedNewsList: PublicacaoDTO[] = [];
  entryOrder: string[] = [];
  isTitleVisible: boolean = false;

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit() {}

  addTitle() {
    this.isTitleVisible = true;
    this.entryOrder.push('title');
  }

  addImage() {
    this.news.nomeImagem = '';
    this.entryOrder.push('image');
  }

  addParagraph() {
    this.news.conteudo = '';
    this.entryOrder.push('paragraph');
  }

  removeTitle() {
    this.isTitleVisible = false;
    this.news.titulo = '';
    this.entryOrder = this.entryOrder.filter(entry => entry !== 'title');
  }

  removeImage(index: number) {
    this.news.nomeImagem = '';
    this.entryOrder.splice(this.entryOrder.indexOf('image'), 1);
  }

  removeParagraph(index: number) {
    this.news.conteudo = '';
    this.entryOrder.splice(this.entryOrder.indexOf('paragraph'), 1);
  }

  saveNews() {
    if (this.news.titulo || this.news.nomeImagem || this.news.conteudo) {
      this.newsService.createNews(this.news).subscribe(() => {
        this.savedNewsList.push({ ...this.news });
        this.news = { titulo: '', conteudo: '', nomeImagem: '', dataPublicacao: new Date() };
        this.entryOrder = [];
        this.isTitleVisible = false;
      });
    } else {
      alert("Por favor, adicione um título, imagem ou parágrafo antes de salvar.");
    }
  }

  previewNews() {
    this.router.navigate(['/view-news'], { state: { newsList: this.savedNewsList } });
  }
}
