import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AluminumPage } from './aluminum.page';

const routes: Routes = [
  {
    path: '',
    component: AluminumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AluminumPageRoutingModule {}
