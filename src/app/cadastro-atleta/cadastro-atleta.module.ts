import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroAtletaPage } from './cadastro-atleta.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HeaderComponent],
  declarations: [CadastroAtletaPage],
  exports: [CadastroAtletaPage], // Exporte o componente
})
export class CadastroAtletaPageModule {}
