import { Component } from '@angular/core';
import {IonicModule, LoadingController} from "@ionic/angular";
import {MatMenuModule} from "@angular/material/menu";
import {Router, RouterLink} from "@angular/router";
import {menu} from "ionicons/icons";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {TransitionScreenComponent} from "../transition-screen/transition-screen.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonicModule,
    MatMenuModule,
    RouterLink,
    MatIcon,
    MatIconButton,
    NgIf,
    TransitionScreenComponent
  ],
  standalone: true
})
export class HeaderComponent{
  showTransitionScreen = false;

  constructor(private router: Router, private loadingController: LoadingController) { }

  async logout() {
    const load = await this.loadingController.create({
      message: 'Saindo...',
      spinner: 'circular',
      duration: 2000
    });

    await load.present();

    setTimeout(() => {
      load.dismiss();
      this.showTransitionScreen = true;

      setTimeout(() => {
        this.showTransitionScreen = false;
        this.router.navigateByUrl('/login');
      }, 2000);
    }, 2000);
  }

  protected readonly menu = menu;

}
