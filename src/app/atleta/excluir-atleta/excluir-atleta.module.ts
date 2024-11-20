import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcluiratletaPageRoutingModule } from './excluir-atleta-routing.module';

import { ExcluiratletaPage } from './excluir-atleta.page';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcluiratletaPageRoutingModule,
    HeaderComponent,
  ],
  declarations: [ExcluiratletaPage],
})
export class ExcluiratletaPageModule {}
