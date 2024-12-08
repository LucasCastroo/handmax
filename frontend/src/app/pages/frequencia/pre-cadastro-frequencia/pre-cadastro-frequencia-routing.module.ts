import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreCadastroFrequenciaPage } from './pre-cadastro-frequencia.page';

const routes: Routes = [
  {
    path: '',
    component: PreCadastroFrequenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreCadastroFrequenciaPageRoutingModule {}
