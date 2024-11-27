import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
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
export class TextEditorComponent {
  htmlContent: string = '';
  private apiUrl = 'http://localhost:8080/publicacao/upload/imagem';

  @Output() contentChange = new EventEmitter<string>();

  constructor(private http: HttpClient,
    private newsService: NewsService
  ) { }

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
        const nomeImagem = response?.message;
        console.log(`Nome da imagem: ${nomeImagem}`);
  
        // Realizar o download da imagem para exibir no editor
        this.newsService.downloadImage(nomeImagem).subscribe(blob => {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            const imageUrl = event.target.result;
  
            // Garantir que a imagem é exibida corretamente no editor
            const imgElement = `<img src="${imageUrl}" alt="${fileNameWithExtension}" style="max-width: 100%; height: auto;">`;
            const editor = document.querySelector('.editor');
            if (editor) {
              editor.innerHTML += imgElement; // Adicionar imagem ao editor
            }
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