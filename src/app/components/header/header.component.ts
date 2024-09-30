import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {MatMenuModule} from "@angular/material/menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonicModule,
    MatMenuModule
  ],
  standalone: true
})
export class HeaderComponent {

  constructor(public router: Router) { }

  logout() {
    // Lógica de logout
    this.router.navigateByUrl("/login").then();
    console.log('Sair');
  }

}
