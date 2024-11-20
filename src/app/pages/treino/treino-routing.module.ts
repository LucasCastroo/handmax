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
  },
    path: 'edit-treino',
    loadChildren: () => import('./edit-treino/edit-treino.module').then( m => m.EditTreinoPageModule)
  },
  {
    path: 'view-treino',
    loadChildren: () => import('./view-treino/view-treino.module').then( m => m.ViewTreinoPageModule)
  },
  {
    path: 'frequencia-treino',
    loadChildren: () => import('./frequencia-treino/frequencia-treino.module').then( m => m.FrequenciaTreinoPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinoPageRoutingModule {}