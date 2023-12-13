import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NickelPageRoutingModule } from './nickel-routing.module';

import { NickelPage } from './nickel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NickelPageRoutingModule
  ],
  declarations: [NickelPage]
})
export class NickelPageModule {}
