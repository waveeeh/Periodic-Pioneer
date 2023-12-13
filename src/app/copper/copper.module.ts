import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopperPageRoutingModule } from './copper-routing.module';

import { CopperPage } from './copper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopperPageRoutingModule
  ],
  declarations: [CopperPage]
})
export class CopperPageModule {}
