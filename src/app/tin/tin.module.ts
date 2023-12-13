import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinPageRoutingModule } from './tin-routing.module';

import { TinPage } from './tin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinPageRoutingModule
  ],
  declarations: [TinPage]
})
export class TinPageModule {}
