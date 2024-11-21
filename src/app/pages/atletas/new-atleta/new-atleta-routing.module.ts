import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAtletaPage } from './new-atleta.page';

const routes: Routes = [
  {
    path: '',
    component: NewAtletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAtletaPageRoutingModule {}
