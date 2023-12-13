import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZirconiumPageRoutingModule } from './zirconium-routing.module';

import { ZirconiumPage } from './zirconium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZirconiumPageRoutingModule
  ],
  declarations: [ZirconiumPage]
})
export class ZirconiumPageModule {}
