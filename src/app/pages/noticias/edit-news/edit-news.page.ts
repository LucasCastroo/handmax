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
    console.log("Requisição de salvar notícia no Edit News");
  
    if (this.news.id) { // Verifica se o ID está definido
      console.log("ID encontrado:", this.news.id);
  
      if (this.news.titulo || this.news.nomeImagem || this.news.conteudo) {
        // Atualiza a notícia se os dados mínimos forem fornecidos
        this.newsService.updateNews(this.news.id, this.news).subscribe({
          next: () => {
            console.log("Notícia atualizada com sucesso.");
            this.router.navigate(['/view-news']);
          },
          error: (error) => {
            console.error("Erro ao atualizar notícia:", error);
            alert("Houve um erro ao atualizar a notícia.");
          }
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
