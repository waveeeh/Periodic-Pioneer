import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChromiumPageRoutingModule } from './chromium-routing.module';

import { ChromiumPage } from './chromium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChromiumPageRoutingModule
  ],
  declarations: [ChromiumPage]
})
export class ChromiumPageModule {}
