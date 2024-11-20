import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListatletaPageRoutingModule } from './list-atleta-routing.module';
import { ListatletaPage } from './list-atleta.page';
import { HeaderComponent } from '../../../components/header/header.component';
import { CadastroAtletaPageModule } from '../cadastro-atleta/cadastro-atleta.module';
import { EditarAtletaPageModule } from '../edit-atleta/edit-atleta.module';
import { ExcluiratletaPageModule } from '../excluir-atleta/excluir-atleta.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListatletaPageRoutingModule,
    EditarAtletaPageModule,
    ExcluiratletaPageModule,
    HeaderComponent,
  ],
  declarations: [ListatletaPage],
})
export class ListatletaPageModule {}
