import { NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ExcluirTreinoRoutingModule} from "./excluir-treino-routing.module";
import { IonicModule } from '@ionic/angular';
import {ExcluirTreinoComponent} from "./excluir-treino.component";
import {HeaderComponent} from "../../components/header/header.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcluirTreinoRoutingModule,
    HeaderComponent
  ],
  declarations: [ExcluirTreinoComponent]
})
export class ExcluirTreinoModule { }
