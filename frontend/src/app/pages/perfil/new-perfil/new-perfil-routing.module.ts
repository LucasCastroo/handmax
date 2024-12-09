import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPerfilPage } from './new-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: NewPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPerfilPageRoutingModule {}
