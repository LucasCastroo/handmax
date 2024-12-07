import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAtletaPageRoutingModule } from './edit-atleta-routing.module';

import { EditAtletaPage } from './edit-atleta.page';
import { FooterComponent } from "../../../components/footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAtletaPageRoutingModule,
    ReactiveFormsModule,
    FooterComponent
],
  declarations: [EditAtletaPage]
})
export class EditAtletaPageModule {}
