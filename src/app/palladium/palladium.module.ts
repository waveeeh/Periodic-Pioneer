import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalladiumPageRoutingModule } from './palladium-routing.module';

import { PalladiumPage } from './palladium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalladiumPageRoutingModule
  ],
  declarations: [PalladiumPage]
})
export class PalladiumPageModule {}
