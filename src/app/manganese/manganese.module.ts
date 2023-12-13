import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManganesePageRoutingModule } from './manganese-routing.module';

import { ManganesePage } from './manganese.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManganesePageRoutingModule
  ],
  declarations: [ManganesePage]
})
export class ManganesePageModule {}
