import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewNoticiaPageRoutingModule } from './new-noticia-routing.module';

import { NewNoticiaPage } from './new-noticia.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { TextEditorComponent } from "../../../components/text-editor/text-editor.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewNoticiaPageRoutingModule,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    TextEditorComponent
],
  declarations: [NewNoticiaPage]
})
export class NewNoticiaPageModule {}
