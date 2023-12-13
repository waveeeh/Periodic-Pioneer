import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrominePage } from './bromine.page';

const routes: Routes = [
  {
    path: '',
    component: BrominePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrominePageRoutingModule {}
