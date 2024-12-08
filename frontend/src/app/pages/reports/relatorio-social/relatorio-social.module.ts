import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatorioSocialPageRoutingModule } from './relatorio-social-routing.module';

import { RelatorioSocialPage } from './relatorio-social.page';
import { HeaderComponent } from "../../../components/header/header.component";
import { BaseChartDirective } from 'ng2-charts';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatorioSocialPageRoutingModule,
    HeaderComponent,
    BaseChartDirective,
    FooterComponent
],
  declarations: [RelatorioSocialPage]
})
export class RelatorioSocialPageModule {}
