import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChlorinePage } from './chlorine.page';

const routes: Routes = [
  {
    path: '',
    component: ChlorinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChlorinePageRoutingModule {}
