import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GermaniumPageRoutingModule } from './germanium-routing.module';

import { GermaniumPage } from './germanium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GermaniumPageRoutingModule
  ],
  declarations: [GermaniumPage]
})
export class GermaniumPageModule {}
