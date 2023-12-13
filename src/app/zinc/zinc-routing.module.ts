import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZincPage } from './zinc.page';

const routes: Routes = [
  {
    path: '',
    component: ZincPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZincPageRoutingModule {}
