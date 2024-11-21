import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrequenciaTreinoPageRoutingModule } from './frequencia-treino-routing.module';

import { FrequenciaTreinoPage } from './frequencia-treino.page';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrequenciaTreinoPageRoutingModule,
    HeaderComponent
  ],
  declarations: [FrequenciaTreinoPage]
})
export class FrequenciaTreinoPageModule {}
