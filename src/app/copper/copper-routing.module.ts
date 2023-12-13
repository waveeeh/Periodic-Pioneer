import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopperPage } from './copper.page';

const routes: Routes = [
  {
    path: '',
    component: CopperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopperPageRoutingModule {}
