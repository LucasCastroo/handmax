import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcarFrequenciaPageRoutingModule } from './marcar-frequencia-routing.module';

import { MarcarFrequenciaPage } from './marcar-frequencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcarFrequenciaPageRoutingModule
  ],
  declarations: [MarcarFrequenciaPage]
})
export class MarcarFrequenciaPageModule {}
