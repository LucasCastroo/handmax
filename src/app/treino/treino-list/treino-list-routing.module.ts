import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreinoListComponent } from './treino-list.component';

const routes: Routes = [
  {
    path: '',
    component: TreinoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreinoListRoutingModule { }
