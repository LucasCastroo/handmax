import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatorioSocialPage } from './relatorio-social.page';

const routes: Routes = [
  {
    path: '',
    component: RelatorioSocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatorioSocialPageRoutingModule {}
