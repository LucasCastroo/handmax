import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TreinoListRoutingModule } from './treino-list-routing.module';
import { TreinoListComponent } from './treino-list.component';
import { HeaderComponent } from '../../components/header/header.component';


@NgModule({
  declarations: [TreinoListComponent],
  imports: [
    CommonModule,
    TreinoListRoutingModule,
    IonicModule,
    HeaderComponent
  ]
})
export class TreinoListModule { }
