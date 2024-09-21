import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule ,ReactiveFormsModule  } from '@angular/forms';

import { ForgotPasswordComponent } from './forgot-password.component'; 
import { ForgotPasswordRoutingModule } from './forgot-password.routing.module'; 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, 
    ForgotPasswordRoutingModule 
  ],
  declarations: [ForgotPasswordComponent] 
})
export class ForgotPasswordModule {}
