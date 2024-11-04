import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAtletaPage } from './edit-atleta.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAtletaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAtletaPageRoutingModule {}
