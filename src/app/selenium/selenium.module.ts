import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleniumPageRoutingModule } from './selenium-routing.module';

import { SeleniumPage } from './selenium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleniumPageRoutingModule
  ],
  declarations: [SeleniumPage]
})
export class SeleniumPageModule {}
