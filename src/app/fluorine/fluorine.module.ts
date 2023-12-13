import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FluorinePageRoutingModule } from './fluorine-routing.module';

import { FluorinePage } from './fluorine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FluorinePageRoutingModule
  ],
  declarations: [FluorinePage]
})
export class FluorinePageModule {}
