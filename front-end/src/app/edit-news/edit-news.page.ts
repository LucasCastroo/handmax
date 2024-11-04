import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.page.html',
  styleUrls: ['./edit-news.page.scss'],
})
export class EditNewsPage implements OnInit {
  news: any = {
    title: '',
    images: [],
    paragraphs: []
  }; 
  entryOrder: string[] = []; 
  isTitleVisible: boolean = false; 

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['newsItem']) {
      this.news = { ...navigation.extras.state['newsItem'] }; 
      this.entryOrder = this.news.entryOrder || []; 
    }
  }

 
  updateNews() {
    this.router.navigate(['/view-news'], { state: { updatedNews: this.news } });
  }

  addTitle() {
    this.isTitleVisible = true;
  }

  removeTitle() {
    this.news.title = '';
    this.isTitleVisible = false;
  }

  addImage() {
    this.news.images.push('');
    this.entryOrder.push('image');
  }

  removeImage(index: number) {
    this.news.images.splice(index, 1);
    this.entryOrder.splice(index, 1);
  }

  addParagraph() {
    this.news.paragraphs.push('');
    this.entryOrder.push('paragraph');
  }

  removeParagraph(index: number) {
    this.news.paragraphs.splice(index, 1);
    this.entryOrder.splice(index, 1);
  }

  previewNews() {
    this.router.navigate(['/view-news']);
  }
}
