import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitaniumPageRoutingModule } from './titanium-routing.module';

import { TitaniumPage } from './titanium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitaniumPageRoutingModule
  ],
  declarations: [TitaniumPage]
})
export class TitaniumPageModule {}
