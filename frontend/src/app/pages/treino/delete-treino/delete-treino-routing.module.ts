import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteTreinoPage } from './delete-treino.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteTreinoPageRoutingModule {}
