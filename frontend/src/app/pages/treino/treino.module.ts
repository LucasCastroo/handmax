import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinoPageRoutingModule } from './treino-routing.module';

import { TreinoPage } from './treino.page';
import { LayoutComponent } from '../../components/layout/layout.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinoPageRoutingModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [TreinoPage]
})
export class TreinoPageModule {}
