import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LithiumPageRoutingModule } from './lithium-routing.module';

import { LithiumPage } from './lithium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LithiumPageRoutingModule
  ],
  declarations: [LithiumPage]
})
export class LithiumPageModule {}
