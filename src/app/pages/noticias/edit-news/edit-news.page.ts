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
    conteudo: '', // String única contendo todos os parágrafos separados por "|"
    nomeImagem: '', // String única contendo URLs de imagens separadas por "|"
    dataPublicacao: new Date(),
  };

  // Arrays locais para manipular múltiplos conteúdos e imagens
  paragraphs: string[] = [];
  images: string[] = [];

  isTitleVisible: boolean = false;

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['newsItem']) {
      this.news = { ...navigation.extras.state['newsItem'] };

      // Converte as strings em arrays para manipulação
      this.paragraphs = this.news.conteudo ? this.news.conteudo.split('|') : [];
      this.images = this.news.nomeImagem ? this.news.nomeImagem.split('|') : [];
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
    this.images.push(''); // Adiciona uma nova entrada para URL de imagem
  }

  removeImage(index: number) {
    this.images.splice(index, 1); // Remove a imagem pelo índice
  }

  addParagraph() {
    this.paragraphs.push(''); // Adiciona uma nova entrada para parágrafo
  }

  removeParagraph(index: number) {
    this.paragraphs.splice(index, 1); // Remove o parágrafo pelo índice
  }

  saveNews() {
    console.log("Requisição de salvar notícia no Edit News");

    if (this.news.id) {
      console.log("ID encontrado:", this.news.id);

      // Converte os arrays para strings concatenadas
      this.news.conteudo = this.paragraphs.join('|');
      this.news.nomeImagem = this.images.join('|');

      if (this.news.titulo || this.news.nomeImagem || this.news.conteudo) {
        this.newsService.updateNews(this.news.id, this.news).subscribe({
          next: () => {
            console.log("Notícia atualizada com sucesso.");
            this.router.navigate(['/view-news']);
          },
          error: (error) => {
            console.error("Erro ao atualizar notícia:", error);
            alert("Houve um erro ao atualizar a notícia.");
          },
        });
      } else {
        alert("Por favor, adicione um título, imagem ou conteúdo antes de salvar.");
      }
    } else {
      alert("ID da notícia não encontrado. Não é possível salvar.");
    }
  }

  previewNews() {
    this.router.navigate(['/view-news'], { state: { newsItem: this.news } });
  }
}
