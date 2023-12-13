import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SulfurPageRoutingModule } from './sulfur-routing.module';

import { SulfurPage } from './sulfur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SulfurPageRoutingModule
  ],
  declarations: [SulfurPage]
})
export class SulfurPageModule {}
