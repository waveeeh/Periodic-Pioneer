import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HydrogenPageRoutingModule } from './hydrogen-routing.module';

import { HydrogenPage } from './hydrogen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HydrogenPageRoutingModule
  ],
  declarations: [HydrogenPage]
})
export class HydrogenPageModule {}
