import { Component } from '@angular/core';
import {IonicModule, LoadingController} from "@ionic/angular";
import {MatMenuModule} from "@angular/material/menu";
import {Router, RouterLink} from "@angular/router";
import {menu} from "ionicons/icons";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonicModule,
    MatMenuModule,
    RouterLink,
    MatIcon,
    MatIconButton
  ],
  standalone: true
})
export class HeaderComponent{

  constructor(private router: Router, private loadingController: LoadingController) { }

  async logout() {
    const loading = await this.loadingController.create({
      message: 'Saindo...',
      spinner: 'circular',
      duration: 2000
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.router.navigateByUrl('/login');
    }, 2000);
  }

  protected readonly menu = menu;

}
