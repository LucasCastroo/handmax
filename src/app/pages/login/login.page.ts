import { Component } from '@angular/core';
import {IonicModule, LoadingController} from '@ionic/angular';
import {Router, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {TransitionScreenComponent} from "../../components/transition-screen/transition-screen.component";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-login',
  imports: [
    IonicModule,
    FormsModule,
    TransitionScreenComponent,
    NgIf,
    RouterModule,

  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true
})
export class LoginPage  {
  showTransitionScreen = false;

  constructor(private router: Router, private loadingController: LoadingController) { }

  async login() {
    const loading = await this.loadingController.create({
      message: 'Entrando...',
      spinner: 'circular',
      duration: 2000
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.showTransitionScreen = true;

      setTimeout(() => {
        this.showTransitionScreen = false;
        this.router.navigateByUrl('/home');
      }, 2000);
    }, 2000);
  }

}
