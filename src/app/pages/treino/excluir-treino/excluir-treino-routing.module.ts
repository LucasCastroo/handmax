import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExcluirTreinoComponent} from "./excluir-treino.component";

const routes: Routes = [
  {
    path: '',
    component: ExcluirTreinoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcluirTreinoRoutingModule { }
