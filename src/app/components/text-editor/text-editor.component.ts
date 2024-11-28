import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  imports: [IonicModule, FormsModule],
  standalone: true
})
export class TextEditorComponent implements OnChanges {
  htmlContent: string = '';
 
  @Input() initialContent: string = ''; // Permitir vinculação ao atributo
  @Output() contentChange = new EventEmitter<string>();

  constructor(private http: HttpClient,
    private newsService: NewsService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialContent'] && changes['initialContent'].currentValue !== undefined) {
      this.htmlContent = changes['initialContent'].currentValue; // Atualiza o conteúdo do editor
      const editor = document.querySelector('.editor') as HTMLElement;
      if (editor) {
        editor.innerHTML = this.htmlContent; // Insere no editor
      }
    }
  }

  onContentUpdate(newContent: string) {
    this.contentChange.emit(newContent); // Emitir alterações
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === '+') {
      event.preventDefault();
      this.resizeImage(20); // Aumenta a largura em 20px
    }
    if (event.ctrlKey && event.key === '-') {
      event.preventDefault();
      this.resizeImage(-20); // Reduz a largura em 20px
    }
  };
  
  ngOnInit() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  
  ngOnDestroy() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  
  execCmd(command: string, value: string = '') {
    console.log(`Executando comando: ${command}, valor: ${value}`);
    document.execCommand(command, false, value);
  }

  updateContent(event: any) {
    this.htmlContent = event.target.innerHTML;
    console.log(`Conteúdo atualizado: ${this.htmlContent}`);
    this.contentChange.emit(this.htmlContent);
  }

  triggerImageUpload() {
    const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      const fileNameWithExtension = file.name;
  
      formData.append('nomeImagem', fileNameWithExtension);
      formData.append('imagem', file);
  
      this.newsService.uploadImages(formData).subscribe(response => {
        const nomeImagem = response?.message; // Supondo que o backend retorna o nome do arquivo salvo no servidor
        console.log(`Nome da imagem: ${nomeImagem}`);
  
        // Gerar URL para a imagem com base no nome retornado pelo backend
        const imageUrl = `http://localhost:8080/homepage/download/imagem/${nomeImagem}`; // Ajuste conforme necessário
  
        // Inserir a imagem no editor usando a URL ao invés do conteúdo base64
        const imgElement = `<img src="${imageUrl}" alt="${nomeImagem}" style="max-width: 100%; height: auto;">`;
        const editor = document.querySelector('.editor');
        if (editor) {
          editor.innerHTML += imgElement; // Adicionar imagem ao editor
        }
      }, error => {
        console.error('Erro ao fazer upload da imagem:', error);
      });
    }
  }
  
    
  createLink() {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      const url = selectedText.startsWith('http') ? selectedText : `${selectedText}`; document.execCommand('createLink', false, url);
    }
  }

  resizeImage(sizeChange: number) {
    const selection = window.getSelection();
    if (selection?.anchorNode?.parentElement?.tagName === 'IMG') {
      const imgElement = selection.anchorNode.parentElement as HTMLImageElement;
      const currentWidth = imgElement.width || imgElement.naturalWidth;
      imgElement.style.width = `${currentWidth + sizeChange}px`;
    }
  }
  
}

/*
import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  imports: [ IonicModule ],
  standalone: true
})
export class TextEditorComponent {
  htmlContent: string = '';

  @Output() contentChange = new EventEmitter<string>();

  constructor(private newsService: NewsService) {}

  execCmd(command: string, value: string = '') {
    console.log(`Executando comando: ${command}, valor: ${value}`);
    document.execCommand(command, false, value);
  }

  updateContent(event: any) {
    this.htmlContent = event.target.innerHTML;
    console.log(`Conteúdo atualizado: ${this.htmlContent}`);
    this.contentChange.emit(this.htmlContent);
  }

  triggerImageUpload() {
    const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      const fileExtension = file.name.split('.').pop();
      formData.append('imagem', file);
      formData.append('extensao', fileExtension);

      this.newsService.uploadImage(formData).subscribe(response => {
        const nomeImagem = response.message;
        console.log(`Nome da imagem: ${nomeImagem}`);

        this.newsService.downloadImage(nomeImagem).subscribe(blob => {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            const imageUrl = event.target.result;
            this.execCmd('insertImage', imageUrl);
          };
          reader.readAsDataURL(blob);
        }, error => {
          console.error('Erro ao fazer download da imagem:', error);
        });
      }, error => {
        console.error('Erro ao fazer upload da imagem:', error);
      });
    }
  }

  createLink() {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      const url = selectedText.startsWith('http') ? selectedText : `http://${selectedText}`;
      document.execCommand('createLink', false, url);
    }
  }
}

*/