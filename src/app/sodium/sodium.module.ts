import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodiumPageRoutingModule } from './sodium-routing.module';

import { SodiumPage } from './sodium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodiumPageRoutingModule
  ],
  declarations: [SodiumPage]
})
export class SodiumPageModule {}
