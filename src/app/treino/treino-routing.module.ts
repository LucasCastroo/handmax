import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinoPage } from './treino.page';

const routes: Routes = [
  {
    path: '',
    component: TreinoPage
  },
  {
    path: 'new-treino',
    loadChildren: () => import('./new-treino/new-treino.module').then( m => m.NewTreinoPageModule)
  },  {
    path: 'edit-treino',
    loadChildren: () => import('./edit-treino/edit-treino.module').then( m => m.EditTreinoPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinoPageRoutingModule {}
