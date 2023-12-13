import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OxygenPage } from './oxygen.page';

const routes: Routes = [
  {
    path: '',
    component: OxygenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OxygenPageRoutingModule {}
