import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-transition-screen',
  templateUrl: './transition-screen.component.html',
  styleUrls: ['./transition-screen.component.scss'],
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})
export class TransitionScreenComponent  implements OnInit {

  show = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.show = false;
    }, 3500);
  }
}
