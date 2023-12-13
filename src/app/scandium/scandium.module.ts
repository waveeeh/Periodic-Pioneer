import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScandiumPageRoutingModule } from './scandium-routing.module';

import { ScandiumPage } from './scandium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScandiumPageRoutingModule
  ],
  declarations: [ScandiumPage]
})
export class ScandiumPageModule {}
