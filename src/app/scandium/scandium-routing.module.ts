import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScandiumPage } from './scandium.page';

const routes: Routes = [
  {
    path: '',
    component: ScandiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScandiumPageRoutingModule {}
