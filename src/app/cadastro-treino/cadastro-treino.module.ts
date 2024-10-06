import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroTreinoPageRoutingModule } from './cadastro-treino-routing.module';

import { CadastroTreinoPage } from './cadastro-treino.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroTreinoPageRoutingModule,
    HeaderComponent,
  ],
  declarations: [CadastroTreinoPage],
})
export class CadastroTreinoPageModule {}
