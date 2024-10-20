import { Component, OnInit } from '@angular/core';

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

  entryOrder: string[] = []; // Array para gerenciar a ordem de exibição
  isTitleVisible: boolean = false;

  constructor() {}

  ngOnInit() {}

  addTitle() {
    this.isTitleVisible = true; // Exibe o título
    this.entryOrder.push('title'); // Adiciona à ordem
  }

  addImage() {
    this.news.images.push(''); // Adiciona um novo espaço para imagem
    this.entryOrder.push('image'); // Adiciona à ordem
  }

  addParagraph() {
    this.news.paragraphs.push(''); // Adiciona um novo espaço para parágrafo
    this.entryOrder.push('paragraph'); // Adiciona à ordem
  }

  removeTitle() {
    this.isTitleVisible = false; // Remove o título
    this.news.title = ''; // Limpa o título
    this.entryOrder = this.entryOrder.filter(entry => entry !== 'title'); // Remove da ordem
  }

  removeImage(index: number) {
    this.news.images.splice(index, 1); // Remove a imagem do array
    this.entryOrder.splice(this.entryOrder.indexOf('image'), 1); // Remove da ordem, garantindo que a ordem de exibição seja atualizada
  }

  removeParagraph(index: number) {
    this.news.paragraphs.splice(index, 1); // Remove o parágrafo do array
    this.entryOrder.splice(this.entryOrder.indexOf('paragraph'), 1); // Remove da ordem
  }

  previewNews() {
    // Lógica para visualização das notícias, se necessário
  }
}
