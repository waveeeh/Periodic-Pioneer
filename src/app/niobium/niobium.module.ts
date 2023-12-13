import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NiobiumPageRoutingModule } from './niobium-routing.module';

import { NiobiumPage } from './niobium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NiobiumPageRoutingModule
  ],
  declarations: [NiobiumPage]
})
export class NiobiumPageModule {}
