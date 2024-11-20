import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTreinoPage } from './edit-treino.page';

const routes: Routes = [
  {
    path: '',
    component: EditTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTreinoPageRoutingModule {}
