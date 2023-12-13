import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LithiumPage } from './lithium.page';

const routes: Routes = [
  {
    path: '',
    component: LithiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LithiumPageRoutingModule {}
