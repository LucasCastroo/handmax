import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreCadastroPageRoutingModule } from './pre-cadastro-routing.module';

import { PreCadastroPage } from './pre-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreCadastroPageRoutingModule
  ],
  declarations: [PreCadastroPage]
})
export class PreCadastroPageModule {}
