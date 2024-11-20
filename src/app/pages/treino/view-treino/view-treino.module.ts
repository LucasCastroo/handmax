import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTreinoPageRoutingModule } from './view-treino-routing.module';

import { ViewTreinoPage } from './view-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTreinoPageRoutingModule
  ],
  declarations: [ViewTreinoPage]
})
export class ViewTreinoPageModule {}
