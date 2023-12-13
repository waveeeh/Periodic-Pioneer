import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnetiumPageRoutingModule } from './technetium-routing.module';

import { TechnetiumPage } from './technetium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnetiumPageRoutingModule
  ],
  declarations: [TechnetiumPage]
})
export class TechnetiumPageModule {}
