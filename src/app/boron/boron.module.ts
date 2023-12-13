import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoronPageRoutingModule } from './boron-routing.module';

import { BoronPage } from './boron.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoronPageRoutingModule
  ],
  declarations: [BoronPage]
})
export class BoronPageModule {}
