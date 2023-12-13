import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArsenicPage } from './arsenic.page';

const routes: Routes = [
  {
    path: '',
    component: ArsenicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArsenicPageRoutingModule {}
