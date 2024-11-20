import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditarAtletaPageRoutingModule } from './edit-atleta-routing.module';
import { EditarAtletaPage } from './edit-atleta.page';
import { HeaderComponent } from '../../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAtletaPageRoutingModule,
    HeaderComponent,
  ],
  declarations: [EditarAtletaPage],
})
export class EditarAtletaPageModule {}
