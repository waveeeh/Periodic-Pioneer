import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhosphorusPageRoutingModule } from './phosphorus-routing.module';

import { PhosphorusPage } from './phosphorus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhosphorusPageRoutingModule
  ],
  declarations: [PhosphorusPage]
})
export class PhosphorusPageModule {}
