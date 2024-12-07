import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreCadastroFrequenciaPageRoutingModule } from './pre-cadastro-frequencia-routing.module';

import { PreCadastroFrequenciaPage } from './pre-cadastro-frequencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreCadastroFrequenciaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PreCadastroFrequenciaPage]
})
export class PreCadastroFrequenciaPageModule {}
