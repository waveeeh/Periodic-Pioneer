import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhosphorusPage } from './phosphorus.page';

const routes: Routes = [
  {
    path: '',
    component: PhosphorusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhosphorusPageRoutingModule {}
