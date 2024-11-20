import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';


@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, LoginPageRoutingModule, ReactiveFormsModule],
  declarations: [],
})
export class LoginPageModule {}
