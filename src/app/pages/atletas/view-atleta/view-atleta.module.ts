import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAtletaPageRoutingModule } from './view-atleta-routing.module';

import { ViewAtletaPage } from './view-atleta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAtletaPageRoutingModule
  ],
  declarations: [ViewAtletaPage]
})
export class ViewAtletaPageModule {}
