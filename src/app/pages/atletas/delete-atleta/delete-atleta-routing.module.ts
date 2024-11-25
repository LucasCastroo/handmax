import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteAtletaPage } from './delete-atleta.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteAtletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteAtletaPageRoutingModule {}
