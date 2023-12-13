import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SulfurPage } from './sulfur.page';

const routes: Routes = [
  {
    path: '',
    component: SulfurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SulfurPageRoutingModule {}
