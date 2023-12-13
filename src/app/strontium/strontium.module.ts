import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrontiumPageRoutingModule } from './strontium-routing.module';

import { StrontiumPage } from './strontium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrontiumPageRoutingModule
  ],
  declarations: [StrontiumPage]
})
export class StrontiumPageModule {}
