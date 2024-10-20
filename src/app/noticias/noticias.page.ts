import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  news: any = {
    title: '',
    image: '',
    paragraph: ''
  };

  currentField: string = '';
  isPreview: boolean = false;
  isNewsList: boolean = false;
  newsList: any[] = [];

  constructor() {}

  ngOnInit() {}

  addField(field: string) {
    this.currentField = field;
    this.isPreview = false;
  }

  previewNews() {
    this.isPreview = true;
  }

  saveNews() {
    this.newsList.push({ ...this.news });
    this.news = {
      title: '',
      image: '',
      paragraph: ''
    };
    this.isPreview = false;
  }

  showNewsList() {
    this.isNewsList = true;
  }

  goBackToEditor() {
    this.isNewsList = false;
  }
}
