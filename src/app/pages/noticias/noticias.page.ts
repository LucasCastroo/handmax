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
    conteudos: [], 
    nomeImagens: [], 
    dataPublicacao: new Date(),
  };

  savedNewsList: PublicacaoDTO[] = [];
  entryOrder: string[] = [];
  isTitleVisible: boolean = false;

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit() {
    
  }

  
  addTitle() {
    this.isTitleVisible = true;
    this.entryOrder.push('title');
  }

  addParagraph() {
    this.news.conteudos.push(''); // Adicionar novo parágrafo vazio
    this.entryOrder.push('paragraph');
  }

  addImage() {
    this.news.nomeImagens.push(''); // Adicionar novo slot de imagem
    this.entryOrder.push('image');
  }

  removeTitle() {
    this.isTitleVisible = false;
    this.news.titulo = '';
    this.entryOrder = this.entryOrder.filter(entry => entry !== 'title');
  }

  removeParagraph(index: number) {
    this.news.conteudos.splice(index, 1); // Remover parágrafo pelo índice
    this.entryOrder.splice(this.entryOrder.findIndex((entry, i) => entry === 'paragraph' && i === index), 1);
  }

  removeImage(index: number) {
    this.news.nomeImagens.splice(index, 1); // Remover imagem pelo índice
    this.entryOrder.splice(this.entryOrder.findIndex((entry, i) => entry === 'image' && i === index), 1);
  }

  saveNews() {
    // Garantir que conteudos não tenham valores vazios ou inválidos
    const newsToSend = {
      titulo: this.news.titulo || 'Título padrão',
      conteudos: this.news.conteudos.filter(conteudo => conteudo.trim() !== ''),  // Filtra conteúdo vazio
      nomeImagens: this.news.nomeImagens || [],
      dataPublicacao: this.news.dataPublicacao || new Date(),
    };
  
    console.log('Dados a serem enviados:', newsToSend);  // Adiciona log para verificar os dados enviados
  
    // Envia os dados ao backend
    this.newsService.createNews(newsToSend).subscribe(
      response => {
        console.log('Notícia salva com sucesso:', response);
        this.savedNewsList.push(response);
        alert('Notícia salva com sucesso!');
        this.news = { titulo: '', conteudos: [], nomeImagens: [], dataPublicacao: new Date() };
      },
      error => {
        console.error('Erro ao salvar a notícia:', error);
        alert('Erro ao salvar a notícia.');
      }
    );
  }
  
  
  

  previewNews() {
    this.router.navigate(['/view-news'], { state: { newsList: this.savedNewsList } });
  }
}
