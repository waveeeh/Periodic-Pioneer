import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CobaltPageRoutingModule } from './cobalt-routing.module';

import { CobaltPage } from './cobalt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CobaltPageRoutingModule
  ],
  declarations: [CobaltPage]
})
export class CobaltPageModule {}
