import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditNoticiaPageRoutingModule } from './edit-noticia-routing.module';

import { EditNoticiaPage } from './edit-noticia.page';
import { TextEditorComponent } from 'src/app/components/text-editor/text-editor.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditNoticiaPageRoutingModule,
    ReactiveFormsModule,
    TextEditorComponent,
    FooterComponent,
    HeaderComponent
  ],
  declarations: [EditNoticiaPage]
})
export class EditNoticiaPageModule {}
