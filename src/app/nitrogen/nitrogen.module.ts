import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NitrogenPageRoutingModule } from './nitrogen-routing.module';

import { NitrogenPage } from './nitrogen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NitrogenPageRoutingModule
  ],
  declarations: [NitrogenPage]
})
export class NitrogenPageModule {}
