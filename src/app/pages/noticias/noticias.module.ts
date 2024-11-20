import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormsModule }   from '@angular/forms';
import { NoticiasPageRoutingModule } from './noticias-routing.module';
import { NoticiasPage } from './noticias.page';
import { HeaderComponent } from '../../components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    NoticiasPageRoutingModule,
    ReactiveFormsModule,
    HeaderComponent,
  ],
  declarations: [
    NoticiasPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoticiasPageModule {} 
