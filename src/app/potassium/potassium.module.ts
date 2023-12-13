import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PotassiumPageRoutingModule } from './potassium-routing.module';

import { PotassiumPage } from './potassium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PotassiumPageRoutingModule
  ],
  declarations: [PotassiumPage]
})
export class PotassiumPageModule {}
