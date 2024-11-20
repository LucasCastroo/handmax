import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditNewsPageRoutingModule } from './edit-news-routing.module'; 
import { EditNewsPage } from './edit-news.page';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditNewsPageRoutingModule,
    ReactiveFormsModule,
    HeaderComponent, 
  ],
  declarations: [
   EditNewsPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class EditNewsPageModule {}
