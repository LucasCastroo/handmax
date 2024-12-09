import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPerfilPageRoutingModule } from './new-perfil-routing.module';

import { NewPerfilPage } from './new-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPerfilPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewPerfilPage]
})
export class NewPerfilPageModule {}
