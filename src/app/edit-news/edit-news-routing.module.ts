import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNewsPage } from './edit-news.page'; 

const routes: Routes = [
  {
    path: '',
    component: EditNewsPage 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditNewsPageRoutingModule {}
