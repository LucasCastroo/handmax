import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAtletaPageRoutingModule } from './edit-atleta-routing.module';

import { EditAtletaPage } from './edit-atleta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAtletaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditAtletaPage]
})
export class EditAtletaPageModule {}
