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
    id: undefined,
    titulo: '',
    conteudos: [], // Array para parágrafos
    nomeImagens: [], // Array para URLs de imagens
    dataPublicacao: new Date(),
  };

  isTitleVisible: boolean = false;

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['newsItem']) {
      this.news = { ...navigation.extras.state['newsItem'] };

      // Garantindo valores padrão para evitar erros ao manipular os arrays
      this.news.conteudos = this.news.conteudos || [];
      this.news.nomeImagens = this.news.nomeImagens || [];
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
    // Cria um novo array com a imagem adicionada
    this.news.nomeImagens = [...this.news.nomeImagens, ''];
  }

  removeImage(index: number) {
    // Cria um novo array sem a imagem removida
    this.news.nomeImagens = this.news.nomeImagens.filter((_, i) => i !== index);
  }

  addParagraph() {
    // Cria um novo array com o parágrafo adicionado
    this.news.conteudos = [...this.news.conteudos, ''];
  }

  removeParagraph(index: number) {
    // Cria um novo array sem o parágrafo removido
    this.news.conteudos = this.news.conteudos.filter((_, i) => i !== index);
  }

  saveNews() {
    console.log('Requisição de salvar notícia no Edit News');

    if (this.news.id) {
      console.log('ID encontrado:', this.news.id);

      // Limpar os campos vazios dos arrays de conteúdo e imagens
      const cleanedNews: PublicacaoDTO = {
        ...this.news,
        conteudos: this.news.conteudos.filter((conteudo) => conteudo.trim() !== ''),
        nomeImagens: this.news.nomeImagens.filter((nomeImagem) => nomeImagem.trim() !== ''),
      };

      // Validação para garantir que pelo menos um campo importante esteja preenchido
      if (
        cleanedNews.titulo.trim() ||
        cleanedNews.nomeImagens.length > 0 ||
        cleanedNews.conteudos.length > 0
      ) {
        // Atualizando a notícia no backend
        this.newsService.update(cleanedNews, this.news.id).subscribe({
          next: () => {
            console.log('Notícia atualizada com sucesso.');
            this.router.navigate(['/view-news']);
          },
          error: (error) => {
            console.error('Erro ao atualizar notícia:', error);
            alert('Houve um erro ao atualizar a notícia.');
          },
        });
      } else {
        alert('Por favor, adicione um título, imagem ou conteúdo antes de salvar.');
      }
    } else {
      alert('ID da notícia não encontrado. Não é possível salvar.');
    }
  }

  previewNews() {
    this.router.navigate(['/view-news'], { state: { newsItem: this.news } });
  }
}
