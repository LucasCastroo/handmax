import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditNoticiaPage } from './edit-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: EditNoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditNoticiaPageRoutingModule {}
