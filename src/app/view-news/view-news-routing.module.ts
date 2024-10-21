import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewNewsPage } from './view-news.page';

const routes: Routes = [
  {
    path: '',
    component: ViewNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewNewsPageRoutingModule {}
