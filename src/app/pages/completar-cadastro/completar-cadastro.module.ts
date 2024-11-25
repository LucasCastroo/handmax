import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletarCadastroPageRoutingModule } from './completar-cadastro-routing.module';

import { CompletarCadastroPage } from './completar-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletarCadastroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CompletarCadastroPage]
})
export class CompletarCadastroPageModule {}
