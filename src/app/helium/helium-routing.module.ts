import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeliumPage } from './helium.page';

const routes: Routes = [
  {
    path: '',
    component: HeliumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeliumPageRoutingModule {}
