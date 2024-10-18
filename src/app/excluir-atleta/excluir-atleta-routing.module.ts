import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcluiratletaPage } from './excluir-atleta.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluiratletaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcluiratletaPageRoutingModule {}
