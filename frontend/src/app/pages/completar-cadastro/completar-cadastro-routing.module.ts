import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletarCadastroPage } from './completar-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: CompletarCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletarCadastroPageRoutingModule {}
