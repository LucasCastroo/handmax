import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewNoticiaPage } from './new-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: NewNoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewNoticiaPageRoutingModule {}
