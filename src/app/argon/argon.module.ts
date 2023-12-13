import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArgonPageRoutingModule } from './argon-routing.module';

import { ArgonPage } from './argon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArgonPageRoutingModule
  ],
  declarations: [ArgonPage]
})
export class ArgonPageModule {}
