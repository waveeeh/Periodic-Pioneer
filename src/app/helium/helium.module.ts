import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeliumPageRoutingModule } from './helium-routing.module';

import { HeliumPage } from './helium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeliumPageRoutingModule
  ],
  declarations: [HeliumPage]
})
export class HeliumPageModule {}
