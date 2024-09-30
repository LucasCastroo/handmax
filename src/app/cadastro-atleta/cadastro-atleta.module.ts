import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAtletaPageRoutingModule } from './cadastro-atleta-routing.module';

import { CadastroAtletaPage } from './cadastro-atleta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAtletaPageRoutingModule,
  ],
  declarations: [CadastroAtletaPage],
})
export class CadastroAtletaPageModule {}
