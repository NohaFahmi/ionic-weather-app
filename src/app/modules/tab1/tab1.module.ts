import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import {ForecastSectionComponentModule} from "../../components/forecast-section/forecast-section.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ForecastSectionComponentModule,
    NgOptimizedImage
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
