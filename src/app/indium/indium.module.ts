import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiumPageRoutingModule } from './indium-routing.module';

import { IndiumPage } from './indium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiumPageRoutingModule
  ],
  declarations: [IndiumPage]
})
export class IndiumPageModule {}
