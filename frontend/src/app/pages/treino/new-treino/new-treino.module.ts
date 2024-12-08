import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTreinoPageRoutingModule } from './new-treino-routing.module';

import { NewTreinoPage } from './new-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTreinoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewTreinoPage]
})
export class NewTreinoPageModule {}
