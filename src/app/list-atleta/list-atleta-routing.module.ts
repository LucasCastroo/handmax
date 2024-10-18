import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListatletaPage } from './list-atleta.page';

const routes: Routes = [
  {
    path: '',
    component: ListatletaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListatletaPageRoutingModule {}
