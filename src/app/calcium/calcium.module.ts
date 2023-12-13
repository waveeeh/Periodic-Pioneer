import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalciumPageRoutingModule } from './calcium-routing.module';

import { CalciumPage } from './calcium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalciumPageRoutingModule
  ],
  declarations: [CalciumPage]
})
export class CalciumPageModule {}
