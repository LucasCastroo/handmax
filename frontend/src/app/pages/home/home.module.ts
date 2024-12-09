import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { BaseChartDirective } from 'ng2-charts';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderComponent,
    BaseChartDirective,
    FooterComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
