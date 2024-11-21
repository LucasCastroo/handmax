import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAtletaPage } from './view-atleta.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAtletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAtletaPageRoutingModule {}
