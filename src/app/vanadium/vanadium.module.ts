import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VanadiumPageRoutingModule } from './vanadium-routing.module';

import { VanadiumPage } from './vanadium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VanadiumPageRoutingModule
  ],
  declarations: [VanadiumPage]
})
export class VanadiumPageModule {}
