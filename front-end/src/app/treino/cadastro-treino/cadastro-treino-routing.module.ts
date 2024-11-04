import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroTreinoPage } from './cadastro-treino.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroTreinoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroTreinoPageRoutingModule {}
