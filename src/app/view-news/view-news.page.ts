import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.page.html',
  styleUrls: ['./view-news.page.scss'],
})
export class ViewNewsPage implements OnInit {
  newsList: any[] = []; 

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['newsList']) {
      this.newsList = navigation.extras.state['newsList'];
    }
  }

  createNews() {
    
    this.router.navigate(['/noticias']);
  }


  viewNews() {
    this.router.navigate(['/view-news']);
  }
  

  editNews(newsItem: any) {
    this.router.navigate(['/edit-news'], { state: { newsItem } });
  }

  deleteNews(newsItem: any) {
    this.newsList = this.newsList.filter(item => item !== newsItem);
  }
}
