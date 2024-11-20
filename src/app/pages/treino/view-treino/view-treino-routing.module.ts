import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTreinoPage } from './view-treino.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTreinoPageRoutingModule {}
