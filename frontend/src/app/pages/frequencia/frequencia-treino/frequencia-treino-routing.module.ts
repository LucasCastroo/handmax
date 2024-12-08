import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrequenciaTreinoPage } from './frequencia-treino.page';

const routes: Routes = [
  {
    path: '',
    component: FrequenciaTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrequenciaTreinoPageRoutingModule {}
