import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalliumPageRoutingModule } from './gallium-routing.module';

import { GalliumPage } from './gallium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalliumPageRoutingModule
  ],
  declarations: [GalliumPage]
})
export class GalliumPageModule {}
