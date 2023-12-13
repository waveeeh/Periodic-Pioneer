import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZirconiumPage } from './zirconium.page';

const routes: Routes = [
  {
    path: '',
    component: ZirconiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZirconiumPageRoutingModule {}
