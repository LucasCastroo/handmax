import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicacaoDTO } from 'src/app/models/publicacao-dto.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-new-noticia',
  templateUrl: './new-noticia.page.html',
  styleUrls: ['./new-noticia.page.scss']
})
export class NewNoticiaPage implements OnInit {
  newsForm: FormGroup;
  selectedFile: File | null = null;

  html = '';

  constructor(private formBuilder: FormBuilder, private newsService: NewsService) {
    this.newsForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      conteudo: this.html
    });
  }

  ngOnInit(): void {
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  onSubmit() {
    if (this.newsForm.valid) {
      const news: PublicacaoDTO = {
        titulo: this.newsForm.get('titulo')!.value,
        conteudo: this.newsForm.get('conteudo')!.value,
      };

      // Primeiro, criar a notícia
      this.newsService.createNews(news).subscribe({
        next: (createdNews) => {
          console.log('Notícia criada com sucesso! ID:', createdNews.id);
          
          // Após a criação da notícia, fazer upload da imagem
          if (this.selectedFile) {
            const formData = new FormData();
            formData.append('nomeImagem', this.selectedFile.name);
            formData.append('imagem', this.selectedFile);

            this.newsService.uploadImage(createdNews.id!, formData).subscribe({
              next: () => {
                console.log('Imagem enviada com sucesso!');
                // Redirecionar ou dar feedback ao usuário
              },
              error: (err) => {
                console.error('Erro ao fazer upload da imagem:', err);
              }
            });
          }
        },
        error: (err) => {
          console.error('Erro ao criar notícia:', err);
        }
      });
    }
  }

    // make sure to destory the editor
    ngOnDestroy(): void {
    }
}

/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../services/news.service';
import { PublicacaoDTO } from '../models/publicacao-dto.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
}

*/