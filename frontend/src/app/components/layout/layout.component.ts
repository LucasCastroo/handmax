import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    IonicModule,
    RouterLink
  ],
  standalone: true
})
export class LayoutComponent {

  constructor() { }

}
