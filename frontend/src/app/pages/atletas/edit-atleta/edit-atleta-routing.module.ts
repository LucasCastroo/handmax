import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAtletaPage } from './edit-atleta.page';

const routes: Routes = [
  {
    path: '',
    component: EditAtletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAtletaPageRoutingModule {}
