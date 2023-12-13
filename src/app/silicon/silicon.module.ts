import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiliconPageRoutingModule } from './silicon-routing.module';

import { SiliconPage } from './silicon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiliconPageRoutingModule
  ],
  declarations: [SiliconPage]
})
export class SiliconPageModule {}
