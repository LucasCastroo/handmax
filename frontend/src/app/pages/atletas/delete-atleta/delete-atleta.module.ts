import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAtletaPageRoutingModule } from './delete-atleta-routing.module';

import { DeleteAtletaPage } from './delete-atleta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteAtletaPageRoutingModule
  ],
  declarations: [DeleteAtletaPage]
})
export class DeleteAtletaPageModule {}
