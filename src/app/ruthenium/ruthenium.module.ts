import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutheniumPageRoutingModule } from './ruthenium-routing.module';

import { RutheniumPage } from './ruthenium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutheniumPageRoutingModule
  ],
  declarations: [RutheniumPage]
})
export class RutheniumPageModule {}
