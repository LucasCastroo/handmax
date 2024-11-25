import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtletasPageRoutingModule } from './atletas-routing.module';

import { AtletasPage } from './atletas.page';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtletasPageRoutingModule,
    HeaderComponent,
    FooterComponent
],
  declarations: [AtletasPage]
})
export class AtletasPageModule {}
