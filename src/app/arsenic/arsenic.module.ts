import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArsenicPageRoutingModule } from './arsenic-routing.module';

import { ArsenicPage } from './arsenic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArsenicPageRoutingModule
  ],
  declarations: [ArsenicPage]
})
export class ArsenicPageModule {}
