import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtletasPage } from './atletas.page';

const routes: Routes = [
  {
    path: '',
    component: AtletasPage
  },
  {
    path: 'new-atleta',
    loadChildren: () => import('./new-atleta/new-atleta.module').then( m => m.NewAtletaPageModule)
  },
  {
    path: 'edit-atleta',
    loadChildren: () => import('./edit-atleta/edit-atleta.module').then( m => m.EditAtletaPageModule)
  },
  {
    path: 'delete-atleta',
    loadChildren: () => import('./delete-atleta/delete-atleta.module').then( m => m.DeleteAtletaPageModule)
  },  {
    path: 'view-atleta',
    loadChildren: () => import('./view-atleta/view-atleta.module').then( m => m.ViewAtletaPageModule)
  },
  {
    path: 'pre-cadastro',
    loadChildren: () => import('./pre-cadastro/pre-cadastro.module').then( m => m.PreCadastroPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtletasPageRoutingModule {}
