import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZincPageRoutingModule } from './zinc-routing.module';

import { ZincPage } from './zinc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZincPageRoutingModule
  ],
  declarations: [ZincPage]
})
export class ZincPageModule {}
