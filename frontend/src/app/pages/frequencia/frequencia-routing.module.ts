import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrequenciaPage } from './frequencia.page';

const routes: Routes = [
  {
    path: '',
    component: FrequenciaPage
  },  {
    path: 'frequencia-treino',
    loadChildren: () => import('./frequencia-treino/frequencia-treino.module').then( m => m.FrequenciaTreinoPageModule)
  },
  {
    path: 'pre-cadastro-frequencia',
    loadChildren: () => import('./pre-cadastro-frequencia/pre-cadastro-frequencia.module').then( m => m.PreCadastroFrequenciaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrequenciaPageRoutingModule {}
