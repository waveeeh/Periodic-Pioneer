import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadmiumPageRoutingModule } from './cadmium-routing.module';

import { CadmiumPage } from './cadmium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadmiumPageRoutingModule
  ],
  declarations: [CadmiumPage]
})
export class CadmiumPageModule {}
