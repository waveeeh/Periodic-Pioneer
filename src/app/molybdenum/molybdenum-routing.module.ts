import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MolybdenumPage } from './molybdenum.page';

const routes: Routes = [
  {
    path: '',
    component: MolybdenumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MolybdenumPageRoutingModule {}
