import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RubidiumPageRoutingModule } from './rubidium-routing.module';

import { RubidiumPage } from './rubidium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RubidiumPageRoutingModule
  ],
  declarations: [RubidiumPage]
})
export class RubidiumPageModule {}
