import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AluminumPageRoutingModule } from './aluminum-routing.module';

import { AluminumPage } from './aluminum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AluminumPageRoutingModule
  ],
  declarations: [AluminumPage]
})
export class AluminumPageModule {}
