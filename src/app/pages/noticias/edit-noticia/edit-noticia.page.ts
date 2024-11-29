import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacaoDTO } from 'src/app/models/publicacao-dto.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-noticia',
  templateUrl: './edit-noticia.page.html',
  styleUrls: ['./edit-noticia.page.scss'],
})
export class EditNoticiaPage implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  updateNewsForm: FormGroup;
  selectedFile: File | null = null;
  html = ''; // Conteúdo inicial do editor
  nomeImagemAtual: string = '';
  newsId: string = ''; // ID da notícia a ser atualizada
  fileName: string | null = null;
  
  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.updateNewsForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      conteudo: this.html
    });
  }

  ngOnInit(): void {
    const noticiaId = this.route.snapshot.paramMap.get('id');
    if (noticiaId) {
      this.loadNoticia(noticiaId);
    }
  }

  loadNoticia(id: string) {
    this.newsService.getNewsById(id).subscribe((noticia) => {
      this.updateNewsForm.patchValue({
        titulo: noticia.titulo,
        conteudo: this.sanitizeHtml(noticia.conteudo)
      });
      this.html = noticia.conteudo; // Atualiza o conteúdo do editor
      this.nomeImagemAtual = noticia.nomeImagem!;

      // Constrói o URL completo da imagem, caso necessário
      if (this.nomeImagemAtual) {
        this.nomeImagemAtual = `http://localhost:8080/homepage/download/imagem/${this.nomeImagemAtual}`;
      }
    });
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click(); // Abre o seletor de arquivo
  }

  onContentChange(htmlContent: string) {
    this.updateNewsForm.patchValue({ conteudo: htmlContent });
  }


  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
      this.fileName = fileInput.files[0].name; // Captura o nome do arquivo
    }
  }

  onSubmit() {
    if (this.updateNewsForm.valid) {
      // Pegue o valor diretamente como string pura
      const contentString = this.updateNewsForm.get('conteudo')!.value;
  
      // Crie o objeto atualizado
      const updatedNews: PublicacaoDTO = {
        titulo: this.updateNewsForm.get('titulo')!.value,
        conteudo: contentString // Use o valor diretamente
      };
  
      console.log(updatedNews);
  
      // Atualizar a notícia
      this.newsService.updateNews(this.newsId, updatedNews).subscribe({
        next: () => {
          console.log('Notícia atualizada com sucesso!');
  
          // Fazer upload da imagem, se uma nova foi selecionada
          if (this.selectedFile) {
            const formData = new FormData();
            formData.append('nomeImagem', this.selectedFile.name);
            formData.append('imagem', this.selectedFile);
  
            this.newsService.uploadImage(this.newsId, formData).subscribe({
              next: () => {
                console.log('Imagem atualizada com sucesso!');
                this.router.navigate(['/noticias']); // Redirecionar após sucesso
              },
              error: (err) => {
                console.error('Erro ao atualizar imagem:', err);
              }
            });
          } else {
            // Redirecionar após atualizar sem imagem
            this.router.navigate(['/noticias']);
          }
        },
        error: (err) => {
          console.error('Erro ao atualizar notícia:', err);
        }
      });
    }
  }
  
  sanitizeHtml(content: string): SafeHtml {
    // Remove as barras invertidas e sanitiza o HTML
    const parsedContent = content.replace(/\\/g, '');
    return this.sanitizer.bypassSecurityTrustHtml(parsedContent);
  }
  
}
