import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) {}

  async ativarToast(message: string, duration: number = 5000): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'bottom', // Posição do toast na tela: 'top', 'middle' ou 'bottom'
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
        },
      ],
    });

    await toast.present();
  }
}
