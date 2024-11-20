import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewNewsPageRoutingModule } from './view-news-routing.module';

import { ViewNewsPage } from './view-news.page';
import { HeaderComponent } from '../../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewNewsPageRoutingModule,
    HeaderComponent
  ],
  declarations: [ViewNewsPage]
})
export class ViewNewsPageModule {}
