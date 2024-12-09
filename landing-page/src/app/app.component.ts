import {AfterViewInit, Component, OnInit} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoticiaService } from './services/noticia.service';
import ScrollReveal from 'scrollreveal';
import {NgForOf} from '@angular/common';
import {Noticia} from './models/noticia';
import {MatDialog} from '@angular/material/dialog';
import {NoticiaDialogComponent} from './components/noticia-dialog/noticia-dialog.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, NgForOf],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'HandMax';
  totalElements = 0;
  notices: Noticia[] = [];
  currentPage: number = 0;
  pageSize: number = 4;

  constructor(private noticiaService: NoticiaService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadNoticias();
  }

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.reveal', { duration: 1000, distance: '70px', opacity: 0, easing: 'ease-in-out', reset: true });
    ScrollReveal().reveal('.subtitulo', { duration: 1500, origin: 'top', opacity: 0, easing: 'ease-in-out', reset: true });
    ScrollReveal().reveal('.image', { duration: 1500, distance: '50px', origin: 'right', opacity: 0, easing: 'ease-in-out', reset: true });
    ScrollReveal().reveal('.roll', { duration: 2200, origin: 'bottom', distance: '80px', opacity: 0, easing: 'ease-in-out', reset: true });
    ScrollReveal().reveal('.roll-contato', { duration: 1500, origin: 'bottom', distance: '30px', opacity: 0, easing: 'ease-out', reset: false });
    ScrollReveal().reveal('.roll-noticia', { duration: 1500, origin: 'bottom', distance: '30px', opacity: 0, easing: 'ease-in-out', reset: true });
  }

  loadNoticias(): void {
    this.noticiaService.getNoticias(this.currentPage, this.pageSize).subscribe({
      next: (data: Noticia[]) => {
        if (Array.isArray(data)) {
          this.notices = data.map((noticia: Noticia) => ({
            id: noticia.id,
            titulo: noticia.titulo,
            conteudo: noticia.conteudo,
            nomeImagem: noticia.nomeImagem,
          }));
          this.totalElements = data.length; // Supondo que a API não fornece "totalElements"
        } else {
          console.warn('Resposta inesperada da API:', data);
          this.notices = [];
          this.totalElements = 0;
        }
      },
      error: (err) => {
        console.error('Erro ao carregar notícias:', err);
        this.notices = [];
        this.totalElements = 0;
      },
    });
  }

  getImagemUrl(nomeImagem: string | undefined): string {
    const baseUrl = 'http://localhost:8080/noticias/download/imagem';
    return nomeImagem ? `${baseUrl}/${nomeImagem}` : 'assets/images/default.png'; // Substitua pela imagem padrão do projeto
  }

  openDialog(noticia: Noticia): void {
    this.dialog.open(NoticiaDialogComponent, {
      width: '750px',
      data: {
        imagem: this.getImagemUrl(noticia.nomeImagem),
        titulo: noticia.titulo,
        descricao: noticia.conteudo
      }
    });
  }

}
