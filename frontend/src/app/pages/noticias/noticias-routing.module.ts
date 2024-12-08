import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasPage } from './noticias.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasPage
  },
  {
    path: 'new-noticia',
    loadChildren: () => import('./new-noticia/new-noticia.module').then( m => m.NewNoticiaPageModule)
  },
  {
    path: 'edit-noticia/:id',
    loadChildren: () => import('./edit-noticia/edit-noticia.module').then( m => m.EditNoticiaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasPageRoutingModule {}
