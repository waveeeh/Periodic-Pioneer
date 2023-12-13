import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KryptonPageRoutingModule } from './krypton-routing.module';

import { KryptonPage } from './krypton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KryptonPageRoutingModule
  ],
  declarations: [KryptonPage]
})
export class KryptonPageModule {}
