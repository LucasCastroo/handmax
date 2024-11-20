import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTreinoPage } from './new-treino.page';

const routes: Routes = [
  {
    path: '',
    component: NewTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTreinoPageRoutingModule {}
