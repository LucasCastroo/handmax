import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAtletaPageRoutingModule } from './new-atleta-routing.module';

import { NewAtletaPage } from './new-atleta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAtletaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewAtletaPage]
})
export class NewAtletaPageModule {}
