import { Component, OnInit } from '@angular/core';
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

  constructor(private newsService: NewsService) {}

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
}