import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcarFrequenciaPage } from './marcar-frequencia.page';

const routes: Routes = [
  {
    path: '',
    component: MarcarFrequenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcarFrequenciaPageRoutingModule {}
