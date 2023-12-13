import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChlorinePageRoutingModule } from './chlorine-routing.module';

import { ChlorinePage } from './chlorine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChlorinePageRoutingModule
  ],
  declarations: [ChlorinePage]
})
export class ChlorinePageModule {}
