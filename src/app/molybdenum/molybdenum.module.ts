import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MolybdenumPageRoutingModule } from './molybdenum-routing.module';

import { MolybdenumPage } from './molybdenum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MolybdenumPageRoutingModule
  ],
  declarations: [MolybdenumPage]
})
export class MolybdenumPageModule {}
