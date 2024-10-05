import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eye, mail, key } from 'ionicons/icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,  private loadingController: LoadingController) { }

  ngOnInit() {
    addIcons({eye, mail, key});
  }

  async login() {
    const loading = await this.loadingController.create({
      message: 'Entrando...',
      spinner: 'circular',
      duration: 2000
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.router.navigateByUrl('/home');
    }, 2000);
  }

}
