import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrequenciaPageRoutingModule } from './frequencia-routing.module';

import { FrequenciaPage } from './frequencia.page';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrequenciaPageRoutingModule,
    HeaderComponent,
    FooterComponent
],
  declarations: [FrequenciaPage]
})
export class FrequenciaPageModule {}
