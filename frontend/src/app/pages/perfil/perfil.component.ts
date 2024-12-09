import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/usuario.model";
import {LocalStorageService} from "../../services/local-storage.service";
import {ModalController} from "@ionic/angular";
import {NewPerfilPage} from "./new-perfil/new-perfil.page";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent  implements OnInit {

  private usuarioLogadoKey = 'usuarioLogado';
  usuarioLogado = this.localStorageService.getItem<Usuario>(this.usuarioLogadoKey);

  constructor(private localStorageService: LocalStorageService,
  private modalController: ModalController) {
  }

  ngOnInit() {
    console.log(this.usuarioLogado)
  }

  async abrirModalCadastro() {
    console.log('Abrir modal de cadastro de treino');
    const modal = await this.modalController.create({
      component: NewPerfilPage
    });

    return await modal.present();
  }
}
