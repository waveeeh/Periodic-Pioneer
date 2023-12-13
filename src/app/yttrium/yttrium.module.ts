import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YttriumPageRoutingModule } from './yttrium-routing.module';

import { YttriumPage } from './yttrium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YttriumPageRoutingModule
  ],
  declarations: [YttriumPage]
})
export class YttriumPageModule {}
