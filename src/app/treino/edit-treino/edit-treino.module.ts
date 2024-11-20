import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTreinoPageRoutingModule } from './edit-treino-routing.module';

import { EditTreinoPage } from './edit-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTreinoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditTreinoPage]
})
export class EditTreinoPageModule {}
