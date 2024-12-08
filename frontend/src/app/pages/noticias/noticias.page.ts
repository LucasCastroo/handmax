import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacaoDTO } from 'src/app/models/publicacao-dto.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  noticias: PublicacaoDTO[] = [];
  imagens: { [key: string]: string } = {};

  constructor(private newsService: NewsService,
              private router: Router
  ) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getNews().subscribe((data: PublicacaoDTO[]) => {
      this.noticias = data;
      this.loadImages();
    });
  }

  loadImages() {
    this.noticias.forEach((noticia) => {
      if (noticia.nomeImagem) {
        this.newsService.downloadImage(noticia.nomeImagem).subscribe((blob) => {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            this.imagens[noticia.nomeImagem!] = event.target.result;
          };
          reader.readAsDataURL(blob);
        });
      }
    });
  }

  editarNoticia(id: number): void {
    if (!id) {
      console.error('ID da notícia inválido.');
      return;
    }
    
    // Redireciona para a rota de edição da notícia
    this.router.navigate([`noticias/edit-noticia/${id}`]).then(success => {
      if (success) {
        console.log(`Redirecionado para a edição da notícia com ID: ${id}`);
      } else {
        console.error('Falha ao redirecionar para a edição da notícia.');
      }
    });
  }


}