import { Injectable } from '@angular/core';
import * as ScrollReveal from 'scrollreveal';

@Injectable({
  providedIn: 'root'
})
export class ScrollRevealService {
  constructor() {}

  revealElement(selector: string) {
    ScrollReveal().reveal(selector, {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      opacity: 0,
      reset: true,
    });
  }
}
