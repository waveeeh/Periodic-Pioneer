import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagnesiumPageRoutingModule } from './magnesium-routing.module';

import { MagnesiumPage } from './magnesium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagnesiumPageRoutingModule
  ],
  declarations: [MagnesiumPage]
})
export class MagnesiumPageModule {}
