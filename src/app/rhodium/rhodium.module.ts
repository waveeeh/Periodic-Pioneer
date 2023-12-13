import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RhodiumPageRoutingModule } from './rhodium-routing.module';

import { RhodiumPage } from './rhodium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RhodiumPageRoutingModule
  ],
  declarations: [RhodiumPage]
})
export class RhodiumPageModule {}
