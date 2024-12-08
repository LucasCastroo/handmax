import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreCadastroPage } from './pre-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: PreCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreCadastroPageRoutingModule {}
