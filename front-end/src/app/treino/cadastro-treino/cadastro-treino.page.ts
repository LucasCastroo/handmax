import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Treino} from "../../models/treino.models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cadastro-treino',
  templateUrl: './cadastro-treino.page.html',
  styleUrls: ['./cadastro-treino.page.scss'],
})
export class CadastroTreinoPage implements OnInit {
  treino = {
    id: 0,
    local: '',
    horario: '',
    data: '',
  };

  constructor(private modalController: ModalController,
              private activatedRoute: ActivatedRoute) {
    const treinoEdit: Treino = this.activatedRoute.snapshot.data['treinoEdit'];

    if (treinoEdit != null){
      this.treino.id = treinoEdit.id;
      this.treino.data = treinoEdit.data;
      this.treino.horario = treinoEdit.horario;
      this.treino.local = treinoEdit.local;
    }

  }

  ngOnInit() {}

  onSubmit() {
    console.log('Treino cadastrado:', this.treino);
  }

  cancel() {
    this.modalController.dismiss();
  }


}
