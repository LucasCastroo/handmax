import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilRoutingModule } from './perfil-routing.module';

import { PerfilComponent } from './perfil.component';
import { HeaderComponent } from '../components/header/header.component';
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilRoutingModule,
    HeaderComponent,
    MatCardModule
  ]
})
export class PerfilModule { }
