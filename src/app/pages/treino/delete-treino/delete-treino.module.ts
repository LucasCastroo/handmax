import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteTreinoPageRoutingModule } from './delete-treino-routing.module';

import { DeleteTreinoPage } from './delete-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteTreinoPageRoutingModule
  ],
  declarations: [DeleteTreinoPage]
})
export class DeleteTreinoPageModule {}
