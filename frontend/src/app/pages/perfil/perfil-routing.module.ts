import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil.component';

const routes: Routes = [
  {
    path: '', component: PerfilComponent,
  },
  {
    path: 'new-perfil',
    loadChildren: () => import('./new-perfil/new-perfil.module').then(m => m.NewPerfilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
