import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrominePageRoutingModule } from './bromine-routing.module';

import { BrominePage } from './bromine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrominePageRoutingModule
  ],
  declarations: [BrominePage]
})
export class BrominePageModule {}
