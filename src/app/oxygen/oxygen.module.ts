import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OxygenPageRoutingModule } from './oxygen-routing.module';

import { OxygenPage } from './oxygen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OxygenPageRoutingModule
  ],
  declarations: [OxygenPage]
})
export class OxygenPageModule {}
