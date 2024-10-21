import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  news: any = {
    title: '',
    images: [],
    paragraphs: []
  };

  savedNewsList: any[] = []; // Lista de notícias salvas
  entryOrder: string[] = [];
  isTitleVisible: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  addTitle() {
    this.isTitleVisible = true;
    this.entryOrder.push('title');
  }

  addImage() {
    this.news.images.push('');
    this.entryOrder.push('image');
  }

  addParagraph() {
    this.news.paragraphs.push('');
    this.entryOrder.push('paragraph');
  }

  removeTitle() {
    this.isTitleVisible = false;
    this.news.title = '';
    this.entryOrder = this.entryOrder.filter(entry => entry !== 'title');
  }

  removeImage(index: number) {
    this.news.images.splice(index, 1);
    this.entryOrder.splice(this.entryOrder.indexOf('image'), 1);
  }

  removeParagraph(index: number) {
    this.news.paragraphs.splice(index, 1);
    this.entryOrder.splice(this.entryOrder.indexOf('paragraph'), 1);
  }

  saveNews() {
    if (this.news.title || this.news.images.length > 0 || this.news.paragraphs.length > 0) {
      this.savedNewsList.push({ ...this.news }); // Salva uma cópia da notícia
      // Limpa os campos após salvar
      this.news = { title: '', images: [], paragraphs: [] };
      this.entryOrder = [];
      this.isTitleVisible = false;
    } else {
      alert("Por favor, adicione um título, imagem ou parágrafo antes de salvar.");
    }
  }

  previewNews() {
    // Navega para a página de visualização passando a lista de notícias salvas
    this.router.navigate(['/view-news'], { state: { newsList: this.savedNewsList } });
  }
}
