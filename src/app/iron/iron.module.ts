import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IronPageRoutingModule } from './iron-routing.module';

import { IronPage } from './iron.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IronPageRoutingModule
  ],
  declarations: [IronPage]
})
export class IronPageModule {}
